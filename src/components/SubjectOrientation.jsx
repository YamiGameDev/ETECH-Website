import { useState } from 'react';
import { subjectDescription, lessonScope, gradingSystem, courseExpectations } from '../data/subjectData';
import './SubjectOrientation.css';

const SubjectOrientation = () => {
  const [activeQuarter, setActiveQuarter] = useState('first');
  const [activeTab, setActiveTab] = useState('overview');

  const renderGradingChart = () => {
    return (
      <div className="grading-chart">
        {gradingSystem.components.map((component, index) => (
          <div key={index} className="grade-component" style={{'--component-color': component.color}}>
            <div className="grade-circle">
              <span className="grade-percentage">{component.percentage}%</span>
            </div>
            <div className="grade-info">
              <h4>{component.category}</h4>
              <p className="grade-description">{component.description}</p>
              <div className="grade-breakdown">
                {component.breakdown.map((item, idx) => (
                  <div key={idx} className="breakdown-item">
                    <span className="breakdown-label">{item.item}:</span>
                    <span className="breakdown-weight">{item.weight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderLessonScope = () => {
    const currentQuarter = activeQuarter === 'first' ? lessonScope.firstQuarter : lessonScope.secondQuarter;
    
    return (
      <div className="lesson-scope">
        <div className="quarter-tabs">
          <button 
            className={`quarter-tab ${activeQuarter === 'first' ? 'active' : ''}`}
            onClick={() => setActiveQuarter('first')}
          >
            First Quarter
          </button>
          <button 
            className={`quarter-tab ${activeQuarter === 'second' ? 'active' : ''}`}
            onClick={() => setActiveQuarter('second')}
          >
            Second Quarter
          </button>
        </div>
        
        <div className="quarter-content">
          <h3>{currentQuarter.title}</h3>
          <div className="topics-grid">
            {currentQuarter.topics.map((topic, index) => (
              <div key={topic.id} className="topic-card">
                <div className="topic-header">
                  <span className="topic-icon">{topic.icon}</span>
                  <span className="topic-number">{index + 1}</span>
                </div>
                <div className="topic-content">
                  <h4>{topic.topic}</h4>
                  <p>{topic.description}</p>
                  <div className="topic-duration">
                    <span className="duration-icon">⏱️</span>
                    <span>{topic.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderOverview = () => {
    return (
      <div className="subject-overview">
        <div className="description-section">
          <div className="description-card">
            <h3>Course Description</h3>
            <p className="main-description">{subjectDescription.description}</p>
          </div>
          
          <div className="objectives-card">
            <h3>Learning Objectives</h3>
            <ul className="objectives-list">
              {subjectDescription.objectives.map((objective, index) => (
                <li key={index} className="objective-item">
                  <span className="objective-icon">✓</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="expectations-section">
          <h3>Course Expectations</h3>
          <div className="expectations-grid">
            {courseExpectations.map((expectation, index) => (
              <div key={index} className="expectation-card">
                <div className="expectation-icon">{expectation.icon}</div>
                <h4>{expectation.title}</h4>
                <p>{expectation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderGradingScale = () => {
    return (
      <div className="grading-scale">
        <h4>Grading Scale</h4>
        <div className="scale-grid">
          {gradingSystem.gradingScale.map((scale, index) => (
            <div key={index} className={`scale-item ${scale.range === 'Below 75' ? 'failing' : ''}`}>
              <div className="scale-range">{scale.range}</div>
              <div className="scale-grade">{scale.grade}</div>
              <div className="scale-description">{scale.description}</div>
            </div>
          ))}
        </div>
        <div className="passing-info">
          <strong>Passing Grade: {gradingSystem.passingGrade}%</strong>
        </div>
      </div>
    );
  };

  return (
    <section className="subject-orientation" id="orientation">
      <div className="container">
        <div className="orientation-header">
          <h2 className="section-title">Subject Orientation</h2>
          <p className="section-subtitle">Everything you need to know about Empowerment Technology</p>
        </div>

        <div className="orientation-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="tab-icon">📋</span>
            Course Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'lessons' ? 'active' : ''}`}
            onClick={() => setActiveTab('lessons')}
          >
            <span className="tab-icon">📚</span>
            Lesson Scope
          </button>
          <button 
            className={`tab-btn ${activeTab === 'grading' ? 'active' : ''}`}
            onClick={() => setActiveTab('grading')}
          >
            <span className="tab-icon">📊</span>
            Grading System
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'lessons' && renderLessonScope()}
          {activeTab === 'grading' && (
            <div className="grading-content">
              {renderGradingChart()}
              {renderGradingScale()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubjectOrientation;