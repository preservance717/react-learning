import React, { Component } from 'react';

import './index.scss';

class FormValidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: null
    }

    this.formControls = {
      name: {
        value: '',
        label: '姓名',
        valid: true,
        wrong: false,
        rules: {
          isRequired: true
        }
      },
      phone: {
        value: '',
        label: '手机号',
        valid: true,
        wrong: false,
        rules: {
          isRequired: true
        }
      },
      hobby: {
        value: '',
        label: '爱好',
        valid: true,
        wrong: false,
        isSelect: true,
        rules: {
          isRequired: true
        }
      },
    }
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    Object.keys(this.formControls).map((ele) => {
      if (ele == name) {
        if (value != '') {
          this.formControls[ele].value = value;
        } else {
          this.formControls[ele].value = value;
        }

        this.formControls[ele].valid = value != '';
        this.formControls[ele].wrong = value == '';
      }
    });
    this.setState({formData: this.getFormData(this.formControls)})
  }

  getFormData = (formControls) => {
    const formData = {};

    Object.keys(formControls).forEach((key) => {
      formData[key] = formControls[key].value;
    });

    return formData;
  }

  submit = () => {
    console.log(this.formControls);
    Object.keys(this.formControls).map((ele) => {
      this.formControls[ele].valid = this.formControls[ele].value != '';
      this.formControls[ele].wrong = this.formControls[ele].value == '';
    });
    this.setState({formData: this.getFormData(this.formControls)})
  }

  render() {
    return (
      <div className="form">
        {
          Object.keys(this.formControls).map(key => {

            if (this.formControls[key].isSelect) {
              return <div className="form__group" key={key}>
                <div className="form__label">{this.formControls[key].label}：</div>
                <div className={`form__input ${this.formControls[key].wrong ? 't-error' : ''}`}>
                  <select name={key} id="" onChange={(event) => this.changeHandler(event)}>
                    <option value="">请选择你的{this.formControls[key].label}</option>
                    <option value="sport">运动</option>
                    <option value="game">打游戏</option>
                    <option value="reading">看书</option>
                  </select>
                </div>
              </div>
            }
            return <div className="form__group" key={key}>
              <div className="form__label">{this.formControls[key].label}：</div>
              <div className={`form__input ${this.formControls[key].wrong ? 't-error' : ''}`}>
                <input
                  type="text"
                  name={key}
                  placeholder={`请输入你的${this.formControls[key].label}`}
                  onChange={(event) => this.changeHandler(event)}
                />
              </div>
            </div>
          })
        }

        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default FormValidate;

