import { useState, useEffect } from 'react';
import { teamMembers } from 'services/team';
import translations from 'components/LanguageSelect/translations';
import s from './SectionTeam.module.scss';

const SectionTeam = ({language}) => {
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

  const handleSelectMember = id => {
    setSelectedMember(id === selectedMember ? null : id);
    setContactInfo({});
  };

  const handleShowContact = (id, type, value) => {
    setContactInfo(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: prev[id]?.[type] === value ? null : value,
      },
    }));
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const firstGroup = teamMembers.slice(0, 3);
  const secondGroup = teamMembers.slice(3, 6);

  const t = translations.team[language];

  return (
    <section className={s.sectionTeam} id="team">
      <div className={`container ${s.teamContainer}`}>
        <h2 className={s.teamTitle}>{t.title}</h2>
        <div className={s.teamBorder}></div>

        <div className={s.teamGroups}>
          <ul className={s.teamList}>
            {firstGroup.map(member => (
              <li
                key={member.id}
                className={`${s.teamList__item} ${
                  selectedMember === member.id ? s.active : ''
                }`}
                onClick={() => handleSelectMember(member.id)}
              >
                <img
                  className={`${s.teamList__itemPhoto} ${
                    selectedMember === member.id ? s.activ : ''
                  }`}
                  src={
                    isWideScreen
                      ? member.photoDesktop
                      : selectedMember === member.id
                      ? member.activePhoto
                      : member.photo
                  }
                  alt={member.name}
                />
                {member.horse && (
                  <img className={s.horse} src={member.horse} alt="horse" />
                )}{' '}
                <div
                  className={`${s.teamNameContainer} ${
                    selectedMember === member.id ? s.activ : ''
                  }`}
                >
                  <h3
                    className={`${s.teamList__itemTitle} ${
                      selectedMember === member.id ? s.active : ''
                    }`}
                  >
                    {member.name[language]}
                  </h3>
                  <p
                    className={`${s.teamList__itemDescription} ${
                      selectedMember === member.id ? s.active : ''
                    }`}
                  >
                    {member.role[language]}
                  </p>

                  {selectedMember === member.id && (
                    <div className={s.contactButtons}>
                      {contactInfo[member.id]?.email ? (
                        <a
                          href={`mailto:${member.email}`}
                          className={s.btnTeamPhoneNumber}
                          onClick={e => e.stopPropagation()}
                        >
                          {truncateText(contactInfo[member.id].email, 24)}
                        </a>
                      ) : (
                        <button
                          className={s.btnTeamPhoneNumber}
                          onClick={e => {
                            e.stopPropagation();
                            handleShowContact(member.id, 'email', member.email);
                          }}
                        >
                          {t.btnmail}
                        </button>
                      )}

                      {contactInfo[member.id]?.phone ? (
                        <a
                          href={`tel:${member.phone.replace(
                            /\s|\(|\)|-/g,
                            ''
                          )}`}
                          className={s.btnTeamEmail}
                          onClick={e => e.stopPropagation()}
                        >
                          {contactInfo[member.id].phone}
                        </a>
                      ) : (
                        <button
                          className={s.btnTeamEmail}
                          onClick={e => {
                            e.stopPropagation();
                            handleShowContact(member.id, 'phone', member.phone);
                          }}
                        >
                          {t.btncall}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <ul className={s.teamListSecond}>
            {secondGroup.map(member => (
              <li
                key={member.id}
                className={`${s.teamList__item} ${
                  selectedMember === member.id ? s.active : ''
                }`}
                onClick={() => handleSelectMember(member.id)}
              >
                <img
                  className={`${s.teamList__itemPhoto} ${
                    selectedMember === member.id ? s.activ : ''
                  }`}
                  src={
                    isWideScreen
                      ? member.photoDesktop
                      : selectedMember === member.id
                      ? member.activePhoto
                      : member.photo
                  }
                  alt={member.name}
                />

                <div
                  className={`${s.teamNameContainer} ${
                    selectedMember === member.id ? s.activ : ''
                  }`}
                >
                  <h3
                    className={`${s.teamList__itemTitle} ${
                      selectedMember === member.id ? s.active : ''
                    }`}
                  >
                    {member.name[language]}
                  </h3>
                  <p
                    className={`${s.teamList__itemDescription} ${
                      selectedMember === member.id ? s.active : ''
                    }`}
                  >
                    {member.role[language]}
                  </p>

                  {selectedMember === member.id && (
                    <div className={s.contactButtons}>
                      {contactInfo[member.id]?.email ? (
                        <a
                          href={`mailto:${member.email}`}
                          className={s.btnTeamPhoneNumber}
                          onClick={e => e.stopPropagation()}
                        >
                          {truncateText(contactInfo[member.id].email, 24)}
                        </a>
                      ) : (
                        <button
                          className={s.btnTeamPhoneNumber}
                          onClick={e => {
                            e.stopPropagation();
                            handleShowContact(member.id, 'email', member.email);
                          }}
                        >
                          {t.btnmail}
                        </button>
                      )}

                      {contactInfo[member.id]?.phone ? (
                        <a
                          href={`tel:${member.phone.replace(
                            /\s|\(|\)|-/g,
                            ''
                          )}`}
                          className={s.btnTeamEmail}
                          onClick={e => e.stopPropagation()}
                        >
                          {contactInfo[member.id].phone}
                        </a>
                      ) : (
                        <button
                          className={s.btnTeamEmail}
                          onClick={e => {
                            e.stopPropagation();
                            handleShowContact(member.id, 'phone', member.phone);
                          }}
                        >
                          {t.btncall}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
