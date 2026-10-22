// src/CourseCard.jsx
import React from 'react';

export default function CourseCard({ course }) {
  // Balanced, premium theme styling variables
  const statusColor = course.completed ? '#047857' : '#1d4ed8'; // Rich Emerald vs Royal Blue
  const statusBg = course.completed ? '#d1fae5' : '#dbeafe';    // Soft matching pill fills
  const progressColor = course.completed ? '#10b981' : '#3b82f6'; // Clear visual track accents

  return (
    <article className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <h2 style={{ fontSize: '1.25rem', color: '#1e293b', margin: 0, fontWeight: '600' }}>
          {course.title}
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0.35rem 0 0 0' }}>
          Lecturer: {course.lecturer}
        </p>
      </div>
      
      {/* Progress Container */}
      <div style={{ marginTop: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '500', color: '#64748b' }}>
            Module Progress
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: progressColor }}>
            {course.progress}%
          </span>
        </div>
        
        {/* Modern Flat Progress Bar Track */}
        <div style={{ background: '#e2e8f0', width: '100%', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${course.progress}%`, height: '100%', background: progressColor, transition: 'width 0.4s ease-out' }}></div>
        </div>
      </div>

      {/* Clean Status Pill Badge */}
      <div style={{ display: 'flex' }}>
        <span style={{ 
          padding: '0.35rem 0.85rem',
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          background: statusBg,
          color: statusColor
        }}>
          {course.completed ? 'Completed' : 'In Progress'}
        </span>
      </div>
    </article>
  );
}
