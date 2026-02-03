import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Star, Trophy, Rocket, Zap } from 'lucide-react';

export default function GrowingChild() {
  const [height, setHeight] = useState(3);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const milestones = [
    { age: 1, title: "First Steps", icon: "👶", color: "#FFB6C1" },
    { age: 2, title: "First Words", icon: "🗣️", color: "#98D8C8" },
    { age: 3, title: "Preschool Start", icon: "🎒", color: "#FFD93D" },
    { age: 4, title: "Making Friends", icon: "👫", color: "#A8E6CF" },
    { age: 5, title: "Learning to Read", icon: "📚", color: "#FFB347" },
    { age: 6, title: "Lost First Tooth", icon: "🦷", color: "#B4A7D6" },
    { age: 7, title: "Riding a Bike", icon: "🚲", color: "#F4A6D7" },
    { age: 8, title: "Sports Champion", icon: "⚽", color: "#87CEEB" },
    { age: 9, title: "Super Smart!", icon: "🌟", color: "#FFD700" }
  ];

  const funFacts = [
    "You're getting taller every day! 📏",
    "Your brain is like a super computer! 🧠",
    "You've grown about 45 inches since birth! 🎉",
    "You can learn a new word every 2 hours! 📖",
    "You're awesome at being YOU! ⭐"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeight(prev => (prev % 7) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const triggerCelebration = (milestone) => {
    setSelectedMilestone(milestone);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      fontFamily: '"Fredoka", "Comic Sans MS", cursive',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Bubblegum+Sans&display=swap');
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .milestone-card {
          transition: all 0.3s ease;
        }
        
        .milestone-card:hover {
          transform: translateY(-10px) rotate(2deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #FFD700;
          animation: confettiFall 3s linear;
        }
        
        @keyframes confettiFall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Floating decorations */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        animation: 'float 6s ease-in-out infinite',
        opacity: 0.6
      }}>
        <Star size={40} fill="#FFD700" color="#FFD700" />
      </div>
      
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '1s',
        opacity: 0.6
      }}>
        <Heart size={35} fill="#FF69B4" color="#FF69B4" />
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '20%',
        animation: 'float 7s ease-in-out infinite',
        animationDelay: '2s',
        opacity: 0.6
      }}>
        <Rocket size={45} fill="#87CEEB" color="#87CEEB" />
      </div>

      {/* Confetti effect */}
      {showConfetti && Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            background: ['#FFD700', '#FF69B4', '#87CEEB', '#98D8C8', '#FFB347'][Math.floor(Math.random() * 5)],
            animationDelay: `${Math.random() * 0.5}s`
          }}
        />
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          animation: 'fadeInUp 0.8s ease'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: '"Bubblegum Sans", cursive',
            color: '#fff',
            textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
            margin: '0',
            animation: 'bounce 2s ease-in-out infinite',
            display: 'inline-block'
          }}>
            I'm 9 Years Old! 🎉
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: '#fff',
            fontWeight: '600',
            marginTop: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Growing Up is AWESOME!
          </p>
        </div>

        {/* Interactive Height Meter */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '30px',
          padding: '40px',
          marginBottom: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 0.8s ease 0.2s backwards'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: '#667eea',
            marginBottom: '30px',
            fontWeight: '700'
          }}>
            Watch Me Grow! 📏
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: '300px',
            gap: '10px'
          }}>
            {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
              <div
                key={bar}
                style={{
                  width: '60px',
                  height: `${bar * 35}px`,
                  background: `linear-gradient(to top, ${['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#DDA15E', '#BC6C25'][bar - 1]}, ${['#FF8E8E', '#6FE8DE', '#67D0E3', '#FFBFA0', '#B8E8DC', '#F0BC82', '#D98E49'][bar - 1]})`,
                  borderRadius: '15px 15px 0 0',
                  transition: 'all 0.5s ease',
                  transform: height === bar ? 'scale(1.1)' : 'scale(1)',
                  opacity: height >= bar ? 1 : 0.3,
                  boxShadow: height === bar ? '0 10px 30px rgba(0,0,0,0.2)' : 'none',
                  animation: height === bar ? 'wiggle 0.5s ease' : 'none'
                }}
              >
                <div style={{
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  marginTop: '-30px',
                  fontWeight: '700'
                }}>
                  {bar === height && '⭐'}
                </div>
              </div>
            ))}
          </div>
          
          <p style={{
            textAlign: 'center',
            marginTop: '30px',
            fontSize: '1.3rem',
            color: '#555',
            fontWeight: '600'
          }}>
            Age {height} 🎂
          </p>
        </div>

        {/* Milestones Timeline */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '30px',
          padding: '40px',
          marginBottom: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 0.8s ease 0.4s backwards'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: '#667eea',
            marginBottom: '30px',
            fontWeight: '700'
          }}>
            My Amazing Journey! 🚀
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {milestones.map((milestone, index) => (
              <div
                key={milestone.age}
                className="milestone-card"
                onClick={() => triggerCelebration(milestone)}
                style={{
                  background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`,
                  borderRadius: '20px',
                  padding: '25px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  animation: `fadeInUp 0.5s ease ${index * 0.1}s backwards`
                }}
              >
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '10px',
                  animation: milestone.age === 9 ? 'pulse 1.5s ease-in-out infinite' : 'none'
                }}>
                  {milestone.icon}
                </div>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#fff',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  marginBottom: '5px'
                }}>
                  Age {milestone.age}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#fff',
                  fontWeight: '600'
                }}>
                  {milestone.title}
                </div>
                {milestone.age === 9 && (
                  <div style={{
                    marginTop: '10px',
                    animation: 'spin 3s linear infinite'
                  }}>
                    <Trophy size={30} color="#FFD700" fill="#FFD700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '30px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 0.8s ease 0.6s backwards'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: '#667eea',
            marginBottom: '30px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            <Sparkles size={40} color="#FFD700" fill="#FFD700" style={{ animation: 'spin 4s linear infinite' }} />
            Cool Facts About Growing!
            <Zap size={40} color="#FFD700" fill="#FFD700" style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {funFacts.map((fact, index) => (
              <div
                key={index}
                style={{
                  background: `linear-gradient(135deg, ${['#FFB6C1', '#98D8C8', '#FFD93D', '#A8E6CF', '#B4A7D6'][index]}, ${['#FFD1DC', '#B8E8DC', '#FFE680', '#C8F0DD', '#D4C7E8'][index]})`,
                  borderRadius: '20px',
                  padding: '20px 30px',
                  fontSize: '1.4rem',
                  color: '#333',
                  fontWeight: '600',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  animation: `fadeInUp 0.5s ease ${index * 0.1 + 0.7}s backwards`,
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                {fact}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Milestone Display */}
        {selectedMilestone && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.98)',
            borderRadius: '30px',
            padding: '50px',
            textAlign: 'center',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
            zIndex: 1000,
            animation: 'pulse 0.5s ease'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '20px' }}>
              {selectedMilestone.icon}
            </div>
            <h3 style={{
              fontSize: '2.5rem',
              color: selectedMilestone.color,
              fontWeight: '700',
              marginBottom: '10px'
            }}>
              {selectedMilestone.title}
            </h3>
            <p style={{
              fontSize: '1.5rem',
              color: '#666',
              fontWeight: '600'
            }}>
              Age {selectedMilestone.age} Achievement! 🎊
            </p>
            <button
              onClick={() => setSelectedMilestone(null)}
              style={{
                marginTop: '30px',
                padding: '15px 40px',
                fontSize: '1.3rem',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: '700',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Awesome! ⭐
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}
