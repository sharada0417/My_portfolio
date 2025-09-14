import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const cardData = [
  {
    id: 1,
    title: '1. Basic HTML',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam .',
    projects: [
      { title: 'Basic Project', link: 'https://example.com/basic1' },
      { title: 'Advance Project', link: 'https://example.com/basic2' }
    ]
  },
  {
    id: 2,
    title: '2. CSS Advanced',
    description: 'This is the description for Card 2, which is a bit longer.',
    projects: [
      { title: 'Basic Project', link: 'https://example.com/css1' },
      { title: 'Advance Project', link: 'https://example.com/css2' }
    ]
  },
  {
    id: 3,
    title: '3. JavaScript',
    description: 'This is the description for Card 3.',
    projects: [
      { title: 'Basic Project', link: 'https://example.com/js1' },
      { title: 'Advance Project', link: 'https://example.com/js2' }
    ]
  },
];

const figma = () => {
  const [collapsedCards, setCollapsedCards] = useState(
      cardData.reduce((acc, card) => {
        acc[card.id] = true;
        return acc;
      }, {})
    );

  const toggleCollapse = (id) => {
    setCollapsedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center py-8 space-y-6">
      {cardData.map((card) => {
        const isCollapsed = collapsedCards[card.id] || false;

        return (
          <div
            key={card.id}
            className="bg-slate-900 text-white w-11/12 rounded-xl shadow-lg p-4 flex flex-col justify-between"
          >
            {/* Row 1: Title + Minus/Plus */}
            <div className="flex justify-between items-center">
              <h1 className="text-blue-300  font-mono mt-1">{card.title}</h1>
              <button
                className="text-white text-3xl font-bold"
                onClick={() => toggleCollapse(card.id)}
              >
                {isCollapsed ? '+' : '-'}
              </button>
            </div>

            {/* Row 2: Description */}
            {!isCollapsed && (
              <>
                <p className="text-sm text-white mt-2">{card.description}</p>

                {/* Row 3: Small, very round Project Divs */}
                <div className="flex justify-center mt-4 gap-6">
                  {card.projects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="w-1/6 flex flex-col items-center bg-gray-900 rounded-full py-1 px-2 border border-white"
                    >
                      {/* Small Icon and Title */}
                      <div className="flex items-center gap-1">
                        <FaGithub className="text-white text-xl" />
                        <span className="font-medium text-xs">{proj.title}</span>
                      </div>
                      {/* Small Rounded View Project Button with Animation */}
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white rounded-full py-0.5 px-2 text-[10px] mb-1 transition transform hover:scale-105"
                      >
                        View
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default figma;

