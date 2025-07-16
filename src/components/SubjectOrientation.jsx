import { useState } from 'react';
import { subjectDescription, lessonScope, gradingSystem, courseExpectations, professorInfo } from '../data/subjectData';
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

        <div className="about-section">
          <h3>About Empowerment Technology</h3>
          <div className="about-content-cards">
            <div className="about-card">
              <div className="about-icon">🎓</div>
              <h4>Educational Framework</h4>
              <p>{subjectDescription.aboutContent.overview}</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🛠️</div>
              <h4>Learning Approach</h4>
              <p>{subjectDescription.aboutContent.approach}</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🚀</div>
              <h4>Our Methodology</h4>
              <p>{subjectDescription.aboutContent.methodology}</p>
            </div>
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

  const renderProfessorInfo = () => {
    return (
      <div className="professor-info">
        <div className="professor-header">
          <div className="professor-card">
            <div className="professor-avatar">
              <img 
                src={professorInfo.image} 
                alt={professorInfo.name}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNjY3ZWVhIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+OrjwvdGV4dD4KPHN2Zz4K';
                }}
              />
              <div className="professor-status">
                <span className="status-dot online"></span>
                <span className="status-text">Online</span>
              </div>
            </div>
            <div className="professor-details">
              <h3 className="professor-name">{professorInfo.name}</h3>
              <p className="professor-title">{professorInfo.title}</p>
              <div className="professor-quote">
                <span className="quote-icon">💬</span>
                <p>{professorInfo.gamingQuote}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="professor-content">
          <div className="education-section">
            <h4 className="section-title">
              <span className="title-icon">🎓</span>
              Educational Background
            </h4>
            <div className="education-cards">
              {professorInfo.educationalBackground.map((edu, index) => (
                <div key={index} className={`education-card ${edu.level.toLowerCase()}`}>
                  <div className="education-icon">{edu.icon}</div>
                  <div className="education-content">
                    <h5>{edu.degree}</h5>
                    {edu.major && <p className="education-major">{edu.major}</p>}
                    <span className="education-level">{edu.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="expertise-section">
            <h4 className="section-title">
              <span className="title-icon">⚡</span>
              Skill Tree
            </h4>
            <div className="skills-grid">
              {professorInfo.expertise.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <h5>{skill.skill}</h5>
                    <span className="skill-level">Lv. {skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h4 className="section-title">
              <span className="title-icon">🏆</span>
              Achievements Unlocked
            </h4>
            <div className="achievements-grid">
              {professorInfo.achievements.map((achievement, index) => (
                <div key={index} className={`achievement-card ${achievement.rarity}`}>
                  <div className="achievement-glow"></div>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h5>{achievement.title}</h5>
                  <p>{achievement.description}</p>
                  <div className="rarity-badge">{achievement.rarity}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="philosophy-section">
            <h4 className="section-title">
              <span className="title-icon">🎯</span>
              Teaching Philosophy
            </h4>
            <div className="philosophy-card">
              <p>{professorInfo.teachingPhilosophy}</p>
            </div>
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
          <h2 className="section-title">About</h2>
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
          <button 
            className={`tab-btn ${activeTab === 'professor' ? 'active' : ''}`}
            onClick={() => setActiveTab('professor')}
          >
            <span className="tab-icon">🎮</span>
            Professor Info
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
          {activeTab === 'professor' && renderProfessorInfo()}
        </div>
      </div>
    </section>
  );
};

export default SubjectOrientation;