import React, { Component } from 'react';
import { Section } from '../components/Section/Section';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

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
      <Section
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
        title="Please leave feedback"
      >
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.changeState}
        />

        {countTotalFeedback ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
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
