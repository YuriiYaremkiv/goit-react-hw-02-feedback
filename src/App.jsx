import React, { Component } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const countTotalFeedback = Object.values(this.state).reduce(
      (total, value) => {
        return (total += value);
      },
      0
    );

    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / countTotalFeedback
    );

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.changeState}
        />

        {countTotalFeedback ? (
          <Statistics
            statistic={this.state}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
