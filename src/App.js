import React, { Component } from 'react';
import './index.css';
import StatisticsFeedback from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Container from './components/Container';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () =>
    this.state.good
      ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleImcrement = e => {
    const btnName = e.currentTarget.textContent.toLowerCase();

    Object.keys(this.state).forEach(key => {
      if (btnName === key) {
        this.setState(prevState => ({
          [key]: prevState[key] + 1,
        }));
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leaven feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleImcrement}
          />

          <StatisticsFeedback
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}

export default Feedback;
