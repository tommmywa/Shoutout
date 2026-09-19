import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Check, Sparkles, Play } from 'lucide-react';

export const ShoutoutTrackingScreen: React.FC = () => {
  const { selectedOrder, simulatePublishOrder, navigateTo, navigateBack, playHapticAudio } = useApp();

  if (!selectedOrder) return null;

  const isPublished = selectedOrder.fulfillmentStatus === 'published';

  const handleSimulatePublish = () => {
    playHapticAudio('success');
    simulatePublishOrder(selectedOrder.id);
    navigateTo('published_shoutout');
  };

  const handleListenNow = () => {
    playHapticAudio('bloom');
    navigateTo('published_shoutout');
  };

  const timelineSteps = [
    {
      title: 'Request received',
      desc: 'Your request was submitted.',
      completed: true,
      active: false,
    },
    {
      title: 'Payment confirmed',
      desc: 'Payment successfully processed.',
      completed: true,
      active: false,
    },
    {
      title: 'Artist recording',
      desc: 'The artist is preparing your shoutout.',
      completed: isPublished,
      active: !isPublished,
    },
    {
      title: 'Published',
      desc: 'Your shoutout is ready.',
      completed: isPublished,
      active: false,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        padding: '20px 20px 24px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        overflowY: 'auto',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <button
            onClick={navigateBack}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.7)',
              cursor: 'pointer',
              padding: '4px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.5)' }}>
            ORDER {selectedOrder.id.slice(0, 10).toUpperCase()}
          </span>
          <div style={{ width: '20px' }} />
        </div>

        {/* Header */}
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}
        >
          {selectedOrder.recipientIdentity.displayName}'s shoutout
        </h1>
        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '24px' }}>
          {selectedOrder.songTitle} · {selectedOrder.artistName}
        </p>

        {/* Timeline Stepper Container */}
        <div
          style={{
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '18px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {timelineSteps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '14px', position: 'relative' }}>
                {/* Stepper Node */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '9999px',
                      backgroundColor: step.completed ? '#FFFFFF' : step.active ? '#161820' : '#101116',
                      border: step.active ? '2px solid #FFFFFF' : step.completed ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      zIndex: 2,
                    }}
                  >
                    {step.completed ? (
                      <Check size={14} strokeWidth={3} />
                    ) : step.active ? (
                      <div style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#FFFFFF' }} />
                    ) : null}
                  </div>

                  {/* Vertical connecting line */}
                  {idx < timelineSteps.length - 1 && (
                    <div
                      style={{
                        width: '2px',
                        height: '34px',
                        backgroundColor: step.completed ? '#FFFFFF' : 'rgba(255, 255, 255, 0.12)',
                        marginTop: '4px',
                      }}
                    />
                  )}
                </div>

                {/* Step Content */}
                <div>
                  <h4
                    style={{
                      fontSize: '15px',
                      fontWeight: step.active || step.completed ? 700 : 500,
                      color: step.active || step.completed ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                      marginBottom: '2px',
                    }}
                  >
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {isPublished ? (
          <button
            id="btn-listen-published"
            onClick={handleListenNow}
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: 'none',
              borderRadius: '9999px',
              padding: '16px 24px',
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(255, 255, 255, 0.2)',
            }}
          >
            <Play size={16} fill="#000000" />
            Listen to published shoutout
          </button>
        ) : (
          <button
            id="btn-simulate-publish"
            onClick={handleSimulatePublish}
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: 'none',
              borderRadius: '9999px',
              padding: '16px 24px',
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
            }}
          >
            <Sparkles size={16} />
            Simulate Artist Studio Publish
          </button>
        )}
      </div>
    </div>
  );
};
