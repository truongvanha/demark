import _ from 'lodash';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Table} from 'react-bootstrap';

import TransitionGroup from '../TransitionGroup';
import TxsRowWithdraw from '../txs/TxsRowWithdraw';

let TxsWithdrawTable = React.createClass({
  getInitialState: function() {
    var index = _.findIndex(this.props.market.markets, {'id': this.props.market.market.id});
    var market = this.props.market.markets[index];
    return {
      market: market
    };
  },

  componentDidMount: function() {
    this.componentWillReceiveProps(this.props);
  },

  componentWillReceiveProps: function(nextProps) {
    var index = _.findIndex(nextProps.market.markets, {'id': nextProps.market.market.id});
    var market = nextProps.market.markets[index];

    this.setState({
      market: market
    });
  },

  render: function() {
    var txsRowWithdraw = _.sortBy(this.props.txs, 'block').map(function (tx) {
      return (
        <TxsRowWithdraw key={tx.type + '-' + tx.hash + '-' + tx.id} tx={tx} market={this.state.market} user={this.props.user} />
      );
    }.bind(this));
    txsRowWithdraw.reverse();

    return (
      <div>
        <h4>{this.props.title}</h4>
        <Table condensed hover responsive striped>
          <thead>
            <tr>
              <th className="text-center"><FormattedMessage id='txs_events.block' /></th>
              <th className="text-center"><FormattedMessage id='txs_events.amount' /></th>
              <th className="text-right"><FormattedMessage id='txs_events.datetime' /></th>
            </tr>
          </thead>
          <TransitionGroup transitionName="trades" component="tbody" enterTimeout={1000} leaveTimeout={1000}>
            { txsRowWithdraw }
          </TransitionGroup>
        </Table>
      </div>
    );
  }
});

module.exports = TxsWithdrawTable;
