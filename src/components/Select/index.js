import React, { PureComponent } from 'react';
import './index.scss';

class Select extends PureComponent {
  static defaultProps = {
    title: 'Select',

    isMultiSelect: false,
    withSearchBar: false,
  };

  state = {
    showList: false,
    searchText: '',
    selectTitle: this.props.title,

    masterOptions: this.props.options,
    filteredOptions: this.props.options,
    selectedOptions: [],
  };

  getLabelAttributes = (value) => {
    if (this.props.isMultiSelect) {
      return {
        htmlFor: value,
        className: 'with-checkbox',
        style: { width: '100%' },
      };
    } else {
      return {
        className: 'non-checkbox',
      };
    }
  };

  toggleListHandler = () => {
    this.setState((prevState) => {
      if (prevState.showList) {
        return {
          showList: !prevState.showList,
          filteredOptions: prevState.masterOptions,
          searchText: '',
        };
      }
      return { showList: !prevState.showList };
    });
  };

  closeListHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      this.setState((prevState) => {
        return {
          showList: false,
          filteredOptions: prevState.masterOptions,
          searchText: '',
        };
      });
    }
  };

  searchHandler = (e) => {
    const {
      target: { value },
    } = e;
    let opts;
    if (!value) {
      opts = this.state.masterOptions;
    } else {
      opts = this.state.masterOptions.filter((opt) =>
        opt.label
          .replace(/ /g, '')
          .toUpperCase()
          .includes(value.trim().replace(/ /g, '').toUpperCase())
      );
    }

    this.setState({
      searchText: value,
      filteredOptions: opts,
    });
  };

  checkboxHandler = (e, opt) => {
    const { masterOptions } = this.state;
    const clonedMasterOptions = masterOptions.map((masterOpt) => ({
      ...masterOpt,
    }));
    let selectedOpt = {};

    // handling "all" option
    if (opt.value === 'all') {
      clonedMasterOptions.forEach((opt) => {
        opt.checked = e.target.checked;
      });
    } else {
      selectedOpt = clonedMasterOptions.find((mainOpt) => {
        // Handling nested options
        if (mainOpt.options) {
          return mainOpt.options.some(
            (nestedOpt) => nestedOpt.value === opt.value
          );
        }
        return mainOpt.value === opt.value;
      });

      // Handling nested options
      if (selectedOpt.options) {
        selectedOpt.options.forEach((nestedOpt) => {
          if (nestedOpt.value === opt.value) {
            nestedOpt.checked = !nestedOpt.checked;
          }
        });
      } else {
        selectedOpt.checked = !selectedOpt.checked;
      }
    }

    this.setState(
      (prevState) => {
        return {
          searchText: '',
          masterOptions: clonedMasterOptions,
          filteredOptions: clonedMasterOptions,
          selectedOptions: selectedOpt.options
            ? // Handling nested options
              [
                ...prevState.selectedOptions.filter(
                  (prevOpt) => prevOpt.checked
                ),
                ...selectedOpt.options.filter((nestedOpt) => nestedOpt.checked),
              ].filter(
                (v, i, a) =>
                  a.findIndex(
                    (t) => JSON.stringify(t) === JSON.stringify(v)
                  ) === i
              )
            : clonedMasterOptions.filter((clonedOpt) => clonedOpt.checked),
        };
      },
      () => {
        this.props.onChange(this.state.selectedOptions);
      }
    );
  };

  onClickHandler = (opt) => {
    this.setState(
      {
        searchText: '',
        showList: false,
        selectTitle: opt.label,
      },
      () =>
        this.props.onChange({
          target: {
            value: opt.value,
            name: opt.label,
          },
        })
    );
  };

  renderSearchBar = () => {
    const {
      state: { searchText },

      searchHandler,
    } = this;

    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: '90%',
          bottom: 0,
          padding: '1%',
        }}
      >
        <input
          name='searchText'
          value={searchText}
          autoComplete='off'
          // placeholder="Search your keyword"
          onChange={(e) => searchHandler(e)}
          style={{
            width: '100%',
            height: '100%',
            border: 'transparent',
            background: ' transparent',
            outline: 'none',
          }}
          ref={(el) => (this.searchEl = el)}
        />
      </div>
    );
  };

  renderList = (filteredOptions) => {
    const {
      // state: { filteredOptions },
      props: { isMultiSelect, disabled, loader },
      getId,
      checkboxHandler,
      onClickHandler,
    } = this;

    if (filteredOptions.length === 0) {
      return (
        <li>
          {loader ? (
            <div className='spinner'>
              <div className='bounce1'></div>
              <div className='bounce2'></div>
              <div className='bounce3'></div>
            </div>
          ) : (
            <label>No Options</label>
          )}
        </li>
      );
    }

    return filteredOptions.map((opt) => {
      // Handling nested options
      if (opt.options) {
        return (
          <div style={{ padding: '0.325rem 0' }} key={opt.label}>
            <p
              style={{
                margin: '0.125rem 0',
                padding: '0 0.6125rem',
                fontSize: '0.650rem',
                color: '#a1a1a1',
                textTransform: 'uppercase',
              }}
            >
              {opt.label}
            </p>
            {this.renderList(opt.options)}
          </div>
        );
      }

      return (
        <li
          key={opt.value}
          {...(!isMultiSelect &&
            !disabled && { onClick: () => onClickHandler(opt) })}
        >
          <div className='vr-checkbox' style={{ width: '100%' }}>
            {isMultiSelect && (
              <input
                id={opt.value}
                type='checkbox'
                value={opt.value}
                checked={opt.checked ? opt.checked : false}
                onChange={(e) => checkboxHandler(e, opt)}
              />
            )}
            <label {...this.getLabelAttributes(opt.value)}>{opt.label}</label>
          </div>
        </li>
      );
    });
  };

  componentDidUpdate(prevProps) {
    if (this.searchEl) {
      this.searchEl.focus();
    }
    if (
      this.props.options !== prevProps.options ||
      JSON.stringify(this.props.options) !== JSON.stringify(prevProps.options)
    ) {
      this.setState({
        filteredOptions: this.props.options,
        masterOptions: this.props.options,
      });
    }
  }

  render() {
    const {
      state: { selectTitle, showList, searchText },
      props: { withSearchBar },
      toggleListHandler,
      closeListHandler,
    } = this;

    return (
      <div
        className={`custom-select ${showList ? 'show-dropdown' : ''}`}
        onBlur={closeListHandler}
        tabIndex='1'
        style={{ outline: 'none' }}
      >
        <span className='selected-item' onClick={toggleListHandler}>
          {!searchText && selectTitle}
        </span>

        {showList && withSearchBar && this.renderSearchBar()}
        {showList && (
          <ul className='select-dropdown  left-dropdown'>
            {this.renderList(this.state.filteredOptions)}
          </ul>
        )}
      </div>
    );
  }
}

export default Select;
