// src/App.jsx
import React, { useState } from 'react';
import { coursesData } from './data/courses';
import CourseCard from './CourseCard';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extension Challenge Logic: Calculate dashboard analytics on the fly
  const totalCourses = coursesData.length;
  const completedCount = coursesData.filter(c => c.completed).length;
  const averageProgress = Math.round(
    coursesData.reduce((sum, c) => sum + c.progress, 0) / totalCourses
  );

  // Filter courses based on user selection
  const displayedCourses = coursesData.filter((course) => {
    if (activeFilter === 'Completed') return course.completed;
    if (activeFilter === 'In Progress') return !course.completed;
    return true;
  });

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', color: '#1e293b' }}>
      <header style={{ marginBottom: '2.5rem', textAlign: 'left', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem' }}>
        <h1 style={{ color: '#0f172a', fontSize: '2rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>
          Academic Course Management
        </h1>
        <p style={{ color: '#64748b', margin: 0, fontSize: '1rem' }}>
          Overview of current registrations and completion status metrics.
        </p>
      </header>

      {/* EXTENSION FEATURE: Dynamic Statistics Panel */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem', 
        marginBottom: '2.5rem' 
      }}>
        <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Total Modules</div>
          <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', marginTop: '0.25rem' }}>{totalCourses}</div>
        </div>
        <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Completed Items</div>
          <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#2e7d32', marginTop: '0.25rem' }}>{completedCount}</div>
        </div>
        <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Average Progress</div>
          <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0284c7', marginTop: '0.25rem' }}>{averageProgress}%</div>
        </div>
      </section>

      {/* Filter Navigation Tab Bar */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
        {['All', 'In Progress', 'Completed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              color: activeFilter === tab ? '#0f172a' : '#94a3b8',
              borderBottom: activeFilter === tab ? '2px solid #0f172a' : '2px solid transparent',
              marginBottom: '-0.85rem',
              transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Layout Grid / Empty State Switch */}
      {displayedCourses.length === 0 ? (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>
            No registered courses match the selected criteria filter.
          </p>
        </div>
      ) : (
        <section className="grid">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>
      )}
    </main>
  );
}
