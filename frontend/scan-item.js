import React from 'react';
import Scan from './scan';
import Copyable from './copyable';
import ErrorCheck from './error-check';
import translation from './translation';

export default class ScanItem extends React.Component {
  render () {
    var classes = 'row brd-bottom-grey phh txt-big';
    if(this.props.index === 0) {
      classes = 'ptn ' + classes;
    }

    return (
      <div className={classes}>
        <p>
          <span className="txt-grey prs">{translation.accountNumber}:</span>
          <Copyable text={this.props.item.accountNumber()}/>
        </p>
        {this.props.item.rawAmount ? (
          <p>
            <span className="txt-grey prs">{translation.amount}:</span>
            CHF <Copyable text={this.props.item.amount()}/>
            <ErrorCheck isCorrect={this.props.item.amountCorrect}/>
          </p>
        ) : null}
        <p>
          <span className="txt-grey prs">{translation.referenceNumber}:</span>
          <Copyable text={this.props.item.referenceNumber()}/>
          <ErrorCheck isCorrect={this.props.item.amountCorrect}/>
        </p>
      </div>
    );
  }
}
ScanItem.propTypes = {
  item: React.PropTypes.instanceOf(Scan),
  index: React.PropTypes.number
};
