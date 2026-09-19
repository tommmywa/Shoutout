import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { Play, Clock, ChevronRight } from 'lucide-react';
import { ShoutoutOrder } from '../types';

export const ActivityScreen: React.FC = () => {
  const { orders, setSelectedOrder, navigateTo, playHapticAudio } = useApp();
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  const activeOrders = orders.filter((o) => o.fulfillmentStatus !== 'published');
  const completedOrders = orders.filter((o) => o.fulfillmentStatus === 'published');

  const handleOpenOrder = (order: ShoutoutOrder) => {
    playHapticAudio('tap');
    setSelectedOrder(order);
    if (order.fulfillmentStatus === 'published') {
      navigateTo('published_shoutout');
    } else {
      navigateTo('shoutout_tracking');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 18px 24px',
          boxSizing: 'border-box',
        }}
      >
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          Activity
        </h1>

        {/* Tab switcher with White Selection Border */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#101116',
            padding: '4px',
            borderRadius: '12px',
            marginBottom: '20px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <button
            id="tab-activity-active"
            onClick={() => {
              playHapticAudio('tap');
              setActiveTab('active');
            }}
            style={{
              flex: 1,
              backgroundColor: activeTab === 'active' ? '#161820' : 'transparent',
              color: activeTab === 'active' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
              border: activeTab === 'active' ? '1.5px solid #FFFFFF' : 'none',
              borderRadius: '9px',
              padding: '8px 12px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Active ({activeOrders.length})
          </button>

          <button
            id="tab-activity-completed"
            onClick={() => {
              playHapticAudio('tap');
              setActiveTab('completed');
            }}
            style={{
              flex: 1,
              backgroundColor: activeTab === 'completed' ? '#161820' : 'transparent',
              color: activeTab === 'completed' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
              border: activeTab === 'completed' ? '1.5px solid #FFFFFF' : 'none',
              borderRadius: '9px',
              padding: '8px 12px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Completed ({completedOrders.length})
          </button>
        </div>

        {/* Active List */}
        {activeTab === 'active' && (
          <div>
            {activeOrders.length === 0 ? (
              <div
                style={{
                  backgroundColor: '#101116',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '36px 20px',
                  textAlign: 'center',
                }}
              >
                <Clock size={28} color="rgba(255, 255, 255, 0.3)" style={{ marginBottom: '10px' }} />
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  You're all caught up
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
                  Your active shoutouts will appear here.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeOrders.map((order) => (
                  <div
                    key={order.id}
                    onClick={() => handleOpenOrder(order)}
                    style={{
                      backgroundColor: '#101116',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={order.artworkUrl}
                        alt={order.songTitle}
                        style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
                          {order.recipientIdentity.displayName}
                        </div>
                        <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                          {order.songTitle} · {order.artistName}
                        </div>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            marginTop: '4px',
                            fontSize: '11px',
                            color: 'var(--color-solar-amber)',
                            fontWeight: 600,
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: 'var(--color-solar-amber)' }} />
                          Artist recording
                        </div>
                      </div>
                    </div>

                    <ChevronRight size={16} color="rgba(255, 255, 255, 0.4)" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Completed List */}
        {activeTab === 'completed' && (
          <div>
            {completedOrders.length === 0 ? (
              <div
                style={{
                  backgroundColor: '#101116',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '36px 20px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  Your recognition moments will appear here
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
                  Once an artist publishes your shoutout, you'll find it here.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {completedOrders.map((order) => (
                  <div
                    key={order.id}
                    onClick={() => handleOpenOrder(order)}
                    style={{
                      backgroundColor: '#101116',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={order.artworkUrl}
                        alt={order.songTitle}
                        style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
                          {order.recipientIdentity.displayName}
                        </div>
                        <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                          {order.songTitle} · {order.artistName}
                        </div>
                        <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '2px' }}>
                          Published • +{order.recognitionPointsAwarded} Recognition
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenOrder(order);
                      }}
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '9999px',
                        padding: '6px 14px',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Play size={12} fill="#000000" />
                      Listen
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};
