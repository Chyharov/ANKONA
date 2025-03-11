import { useState } from "react";
import polykovAndriy from "images/team/polykovAndriy.jpg";
import hodirevSerhiy from "images/team/hodirevSerhiy.jpg";
import hodirevaNatalia from "images/team/hodirevaNatalia.jpg";
import soloshenkoAndrii from "images/team/soloshenkoAndrii.jpg";
import komarVolodymyr from "images/team/komarVolodymyr.jpg";
import yanenkoYana from "images/team/yanenkoYana.jpg";
import s from "./SectionTeam.module.scss";

const teamMembers = [
  {
    id: 1,
    name: "Поляков Андрій Юрійович",
    role: "Директор",
    photo: polykovAndriy,
    email: "info@ankona.com.ua",
    phone: "+38 (098) 973 03 91",
  },
  {
    id: 2,
    name: "Ходирєв Сергій Вікторович",
    role: "Керівник/технолог напрямку ВРХ",
    photo: hodirevSerhiy,
    email: "svhodyrev@ankona.com.ua",
    phone: "+38 (050) 481 53 20",
  },
  {
    id: 3,
    name: "Ходирєва Наталія Вікторівна",
    role: "Керівник відділу з продажів напрямку ВРХ",
    photo: hodirevaNatalia,
    email: "nvhodyreva@ankona.com.ua",
    phone: "+38 (050) 777 09 75",
  },
  {
    id: 4,
    name: "Солошенко Андрій",
    role: "Консультант з годівлі свиней",
    photo: soloshenkoAndrii,
    email: "andriy.soloshenko@ankona.com.ua",
    phone: "+38 (098) 604 53 38",
  },
  {
    id: 5,
    name: "Комар Володимир",
    role: "Консультант з годівлі свиней",
    photo: komarVolodymyr,
    email: "volodymyr.komar@ankona.com.ua",
    phone: "+38 (095) 408 95 25",
  },
  {
    id: 6,
    name: "Яненко Яна",
    role: "Керівник роздрібного відділу",
    photo: yanenkoYana,
    email: "retail@ankona.com.ua",
    phone: "+38 (077) 115 11 55",
  },
];

const SectionTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [contactInfo, setContactInfo] = useState({});

  const handleSelectMember = (id) => {
    setSelectedMember(id === selectedMember ? null : id);
    setContactInfo({}); // Очистка контактів при зміні вибору
  };

  const handleShowContact = (id, type, value) => {
    setContactInfo((prev) => ({
      ...prev,
      [id]: prev[id] === value ? null : value, // Перемикання кнопки
    }));
  };

  return (
    <section className={s.sectionTeam}>
      <div className={`container ${s.teamContainer}`}>
        <h2 className={s.teamTitle}>Наша команда</h2>
        <div className={s.teamBorder}></div>
        <ul className={s.teamList}>
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className={`${s.teamList__item} ${selectedMember === member.id ? s.active : ""}`}
              onClick={() => handleSelectMember(member.id)}
            >
              <img
                className={`${s.teamList__itemPhoto} ${selectedMember === member.id ? s.enlargedPhoto : ""}`}
                src={member.photo}
                alt={member.name}
              />
              <div className={s.teamNameContainer}>
                <h3 className={s.teamList__itemTitle}>{member.name}</h3>
                <p className={s.teamList__itemDescription}>{member.role}</p>

                {selectedMember === member.id && (
                  <div className={s.contactButtons}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShowContact(member.id, "email", member.email);
                      }}
                    >
                      {contactInfo[member.id] === member.email ? member.email : "Написати"}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShowContact(member.id, "phone", member.phone);
                      }}
                    >
                      {contactInfo[member.id] === member.phone ? member.phone : "Зателефонувати"}
                    </button>
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
