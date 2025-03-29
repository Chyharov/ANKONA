import { useState, useEffect } from 'react';
import { teamMembers } from 'services/team'
import s from './SectionTeam.module.scss';

const SectionTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [contactInfo, setContactInfo] = useState({});
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1439);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectMember = (id) => {
    setSelectedMember(id === selectedMember ? null : id);
    setContactInfo({});
  };

  const handleShowContact = (id, type, value) => {
    setContactInfo((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: prev[id]?.[type] === value ? null : value,
      },
    }));
  };

  return (
    <section className={s.sectionTeam} id='team'>
      <div className={`container ${s.teamContainer}`}>
        <h2 className={s.teamTitle}>Наша команда</h2>
        <div className={s.teamBorder}></div>
        <ul className={s.teamList}>
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className={`${s.teamList__item} ${selectedMember === member.id ? s.active : ''}`}
              onClick={() => handleSelectMember(member.id)}
            >
              <img
                className={`${s.teamList__itemPhoto} ${selectedMember === member.id ? s.activ : ''}`}
                src={isWideScreen || selectedMember !== member.id ? member.activePhoto : member.photo}
                alt={member.name}
              />
              <div
                className={`${s.teamNameContainer} ${selectedMember === member.id ? s.activ : ''}`}
              >
                <h3
                  className={`${s.teamList__itemTitle} ${selectedMember === member.id ? s.active : ''}`}
                >
                  {member.name}
                </h3>
                <p
                  className={`${s.teamList__itemDescription} ${selectedMember === member.id ? s.active : ''}`}
                >
                  {member.role}
                </p>

                {selectedMember === member.id && (
                  <div className={s.contactButtons}>
                    {contactInfo[member.id]?.email ? (
                      <a
                        href={`mailto:${member.email}`}
                        className={s.btnTeamPhoneNumber}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {contactInfo[member.id].email}
                      </a>
                    ) : (
                      <button
                        className={s.btnTeamPhoneNumber}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowContact(member.id, 'email', member.email);
                        }}
                      >
                        Написати
                      </button>
                    )}

                    {contactInfo[member.id]?.phone ? (
                      <a
                        href={`tel:${member.phone.replace(/\s|\(|\)|-/g, '')}`}
                        className={s.btnTeamEmail}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {contactInfo[member.id].phone}
                      </a>
                    ) : (
                      <button
                        className={s.btnTeamEmail}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowContact(member.id, 'phone', member.phone);
                        }}
                      >
                        Зателефонувати
                      </button>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionTeam;
