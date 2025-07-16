import { useState, useEffect, useRef } from 'react';
import { assessmentQuestions, timerOptions } from '../data/questions';
import './PreAssessment.css';

const PreAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [results, setResults] = useState(null);
  
  // Timer states
  const [timePerQuestion, setTimePerQuestion] = useState(0); // 0 means no timer
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const timerRef = useRef(null);

  const questions = assessmentQuestions;

  // Timer effect
  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isTimerActive && timeLeft === 0 && timePerQuestion > 0) {
      // Auto-advance when timer expires
      handleTimeExpired();
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeLeft, isTimerActive, timePerQuestion]);

  // Clean up timer on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (timePerQuestion > 0) {
      setTimeLeft(timePerQuestion);
      setIsTimerActive(true);
    }
  };

  const stopTimer = () => {
    setIsTimerActive(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleTimeExpired = () => {
    // Auto-advance to next question when timer expires
    stopTimer();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      startTimer(); // Start timer for next question
    } else {
      calculateResults();
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    stopTimer();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      startTimer(); // Start timer for next question
    } else {
      calculateResults();
    }
  };

  const handleSkip = () => {
    stopTimer();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      startTimer(); // Start timer for next question
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    stopTimer();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      startTimer(); // Start timer for previous question
    }
  };

  const calculateResults = () => {
    stopTimer();
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctCount++;
      }
    });

    const calculatedResults = {
      score: correctCount,
      percentage: (correctCount / questions.length) * 100,
      total: questions.length
    };

    setResults(calculatedResults);
    setShowResults(true);
  };

  const resetAssessment = () => {
    stopTimer();
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setIsStarted(false);
    setResults(null);
    setTimeLeft(0);
  };

  const handleStartAssessment = () => {
    setIsStarted(true);
    if (timePerQuestion > 0) {
      startTimer();
    }
  };

  const getScoreMessage = (percentage) => {
    if (percentage >= 90) return "Excellent! You have strong knowledge in Empowerment Technology.";
    if (percentage >= 80) return "Very Good! You have solid understanding with room for improvement.";
    if (percentage >= 70) return "Good! You have basic knowledge but could benefit from further learning.";
    if (percentage >= 60) return "Fair! Consider reviewing the fundamentals of ICT and digital literacy.";
    return "Needs Improvement! This course will significantly enhance your digital skills.";
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timePerQuestion === 0) return '';
    const percentage = (timeLeft / timePerQuestion) * 100;
    if (percentage > 50) return 'timer-safe';
    if (percentage > 25) return 'timer-warning';
    return 'timer-danger';
  };

  if (!isStarted) {
    return (
      <section className="pre-assessment" id="assessment">
        <div className="container">
          <div className="assessment-intro">
            <h2 className="section-title">Test Your Knowledge</h2>
            <div className="intro-content">
              <p className="intro-text">
                Before diving into our Empowerment Technology journey, let's assess your current knowledge. 
                This pre-assessment covers three key areas:
              </p>
              <div className="assessment-categories">
                <div className="category-card">
                  <div className="category-icon">💻</div>
                  <h3>Introduction to ICT</h3>
                  <p>7 questions covering basic ICT concepts</p>
                </div>
                <div className="category-card">
                  <div className="category-icon">🛡️</div>
                  <h3>Ethics on the Internet</h3>
                  <p>7 questions about digital citizenship</p>
                </div>
                <div className="category-card">
                  <div className="category-icon">📊</div>
                  <h3>Advanced Spreadsheet Skills</h3>
                  <p>6 questions on spreadsheet functions</p>
                </div>
              </div>
              
              {/* Timer Selection */}
              <div className="timer-selection">
                <h3>Timer Settings</h3>
                <div className="timer-dropdown">
                  <label htmlFor="timer-select">Time per question:</label>
                  <select 
                    id="timer-select"
                    value={timePerQuestion} 
                    onChange={(e) => setTimePerQuestion(Number(e.target.value))}
                    className="timer-select"
                  >
                    {timerOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="assessment-info">
                <p><strong>Total Questions:</strong> 20</p>
                <p><strong>Time:</strong> {timePerQuestion === 0 ? 'No time limit' : `${timePerQuestion} seconds per question`}</p>
                <p><strong>Format:</strong> Multiple choice</p>
              </div>
              <button className="start-assessment-btn" onClick={handleStartAssessment}>
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults && results) {
    return (
      <section className="pre-assessment" id="assessment">
        <div className="container">
          <div className="results-container">
            <h2 className="section-title">Assessment Results</h2>
            <div className="score-display">
              <div className="score-circle">
                <span className="score-percentage">{results.percentage.toFixed(0)}%</span>
                <span className="score-fraction">{results.score}/{results.total}</span>
              </div>
            </div>
            <div className="score-message">
              <p>{getScoreMessage(results.percentage)}</p>
              {Object.keys(selectedAnswers).length < questions.length && (
                <p className="skip-info">
                  Note: {questions.length - Object.keys(selectedAnswers).length} question(s) were skipped and counted as incorrect.
                </p>
              )}
            </div>
            <div className="category-breakdown">
              <h3>Performance by Category:</h3>
              <div className="breakdown-grid">
                <div className="breakdown-item">
                  <span className="category-name">Introduction to ICT</span>
                  <span className="category-score">
                    {questions.slice(0,7).filter((q, i) => selectedAnswers[i] === q.correct).length}/7
                  </span>
                </div>
                <div className="breakdown-item">
                  <span className="category-name">Ethics on the Internet</span>
                  <span className="category-score">
                    {questions.slice(7,14).filter((q, i) => selectedAnswers[i+7] === q.correct).length}/7
                  </span>
                </div>
                <div className="breakdown-item">
                  <span className="category-name">Advanced Spreadsheet Skills</span>
                  <span className="category-score">
                    {questions.slice(14,20).filter((q, i) => selectedAnswers[i+14] === q.correct).length}/6
                  </span>
                </div>
              </div>
            </div>
            <div className="results-actions">
              <button className="retake-btn" onClick={resetAssessment}>
                Retake Assessment
              </button>
              <button className="continue-btn" onClick={() => {
                const target = document.querySelector('#features');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}>
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="pre-assessment" id="assessment">
      <div className="container">
        <div className="assessment-container">
          <div className="assessment-header">
            <div className="progress-info">
              <span className="question-counter">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="category-tag">{currentQ.category}</span>
            </div>
            
            {/* Timer Display */}
            {timePerQuestion > 0 && (
              <div className={`timer-display ${getTimerColor()}`}>
                <div className="timer-icon">⏱️</div>
                <div className="timer-text">
                  <span className="time-left">{formatTime(timeLeft)}</span>
                  <div className="timer-bar">
                    <div 
                      className="timer-progress" 
                      style={{width: `${(timeLeft / timePerQuestion) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${progress}%`}}></div>
            </div>
          </div>

          <div className="question-container">
            <h3 className="question-text">{currentQ.question}</h3>
            <div className="options-container">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="option-letter">{String.fromCharCode(97 + index)})</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="navigation-buttons">
            <button 
              className="nav-btn prev-btn" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button 
              className="nav-btn skip-btn" 
              onClick={handleSkip}
            >
              Skip
            </button>
            <button 
              className="nav-btn next-btn" 
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreAssessment;