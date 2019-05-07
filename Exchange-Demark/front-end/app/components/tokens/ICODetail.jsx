import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Input, Button } from 'react-bootstrap';

import Progress from "react-progress-2";

import contractService from '../../clients/contractService';

const contractAddress = "0x9541ee8a0d873055b1951037db437374c1999323";

let TokenICO = new contractService.TokenICOContract(contractAddress);

let ICODetail = injectIntl(React.createClass({

    getInitialState() {
        return {
            contract: null,
            alertLevel: 'info',
            alertMessage: '',
            accounts: '',
            contractName: '',
            tokenAmount: '',
            tokenAddress: ''
            // tokenICOInstance: contractService.DTUContract(contractAddress)
        };
    },

    componentWillMount() {
        require("../../css/loader.less");
    },

    // async componentDidMount() {
    //     // TODO smooth / less hackish scroll to ticketId
    //     // if (this.props.params.ticketId && this.refs["ticket-" + this.props.params.ticketId]) {
    //     //     var ticketOffset = this.refs["ticket-" + this.props.params.ticketId].offsetTop;
    //     //     window.scroll(0, ticketOffset);
    //     // }
    //     try {
    //         console.log('====================================')
    //         console.log("Test")
    //         console.log('====================================')
    //     } catch (err) {
    //         this.setState({ errorMessage: "Oops! " + err.message.split("\n")[0] });
    //     }
    // },

    setAlert(alertLevel, alertMessage) {
        this.setState({
            alertLevel: alertLevel,
            alertMessage: alertMessage
        });
    },

    showAlert(show) {
        this.refs.alerts.setState({ alertVisible: show });
    },

    notification(currState) {
        if (currState < 0) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <p className="panel-title">Contract out of money</p>
                    </div>
                </div>
            )
        }
    },

    async onMintToken(e) {
        e.preventDefault();
        try {
            const account = await TokenICO.getAccount();
            await TokenICO.mint(account, this.state.tokenAddress, this.state.tokenAmount);
          } catch (err) {
              this.setState({ errorMessage: "Oops! " + err.message.split("\n")[0] });
          }
          this.setState({
            tokenAmount: null,
            tokenAddress: null
          });
    },

    render() {
        return (
            <div>
                <Progress.Component
                />
                <div className="token-wrapper panel panel-default">
                    <div className="container">
                        {/* For mint token */}
                        <div className="row">
                            {/* ----------- ICO TOKEN DETAIL ----------- */}
                            <div className="col-md-6">
                                <h1>TOKEN ICO</h1>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h3 className="panel-title">Address</h3>
                                            </div>
                                            <div className="panel-body">
                                                <div className="container-fluid">
                                                    <span style={{ color: 'blue' }}>...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h3 className="panel-title" style={{ fontSize: '12px', textAlign: 'center' }}>Name</h3>
                                            </div>
                                            <div className="panel-body">
                                                <div className="container-fluid">
                                                    <span style={{ color: 'blue' }}>...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h3 className="panel-title" style={{ fontSize: '12px', textAlign: 'center' }}>Decimals</h3>
                                            </div>
                                            <div className="panel-body">
                                                <div className="container-fluid">
                                                    <span style={{ color: 'blue' }}>...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h3 className="panel-title" style={{ fontSize: '12px', textAlign: 'center' }}>Total Supply</h3>
                                            </div>
                                            <div className="panel-body">
                                                <div className="container-fluid">
                                                    <span style={{ color: 'blue' }}>...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            {/* ----------- To mint token ----------- */}
                            <div className="col-md-6">
                                <form className="form-horizontal" role="form" onSubmit={this.onMintToken} >

                                    <h2>TO MINT TOKEN</h2>
                                    <Input type="number" ref="amount"
                                        placeholder="10"
                                        label="Amount" labelClassName="sr-only"
                                        value={this.state.amount}
                                        />
                                    
                                    <Input type="text" ref="address"
                                        placeholder="0xa75b2d7b277919c224b198743c88efe608ba8c1e"
                                        label="To Address" labelClassName="sr-only"
                                        value={this.state.address}
                                        />

                                    <div className="form-group">
                                        <Button className={"btn-block" + (this.state.newWithdrawal ? " btn-primary" : "")} type="submit" key="toaddress">
                                            <FormattedMessage id='form.mint' />
                                        </Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}));

module.exports = ICODetail;