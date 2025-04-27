import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from 'services/Products';
import translations from 'components/LanguageSelect/translations';
import ButtonCallBack from 'components/ButtonCallBack/ButtonCallBack';
import iconHorse from 'images/goods/iconHorse.svg';
import iconPig from 'images/goods/iconPig.svg';
import iconHen from 'images/goods/iconHen.svg';
import iconCalf from 'images/goods/iconCalf.svg';
import iconCow from 'images/goods/iconCow.svg';
import iconGoat from 'images/goods/iconGoat.svg';
import s from './ProductDetails.module.scss';

const categoryIcons = {
  'ВРХ дорослі': iconCow,
  'Adult Cattle': iconCow,
  'ВРХ молодняк': iconCalf,
  'Young Cattle': iconCalf,
  ДРХ: iconGoat,
  'Small Cattle': iconGoat,
  Коні: iconHorse,
  Horses: iconHorse,
  Птиця: iconHen,
  Birds: iconHen,
  Свині: iconPig,
  Pigs: iconPig,
  'Підходить для всіх': [iconCow, iconCalf, iconGoat, iconHorse, iconHen, iconPig],
  'Suitable for all': [iconCow, iconCalf, iconGoat, iconHorse, iconHen, iconPig],
};

const ProductDetails = ({ language }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const t = translations.goods[language];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1440;

  if (!product) {
    return <p className={s.notFound}>Товар не знайдено</p>;
  }

const iconsToRender = Array.isArray(product.category[language])
  ? product.category[language].flatMap(cat =>
      categoryIcons[cat]
        ? (Array.isArray(categoryIcons[cat]) ? categoryIcons[cat] : [categoryIcons[cat]])
        : []
    )
  : categoryIcons[product.category[language]]
    ? (Array.isArray(categoryIcons[product.category[language]])
        ? categoryIcons[product.category[language]]
        : [categoryIcons[product.category[language]]]
      )
    : [];

const finalIcons = iconsToRender.length > 0
  ? iconsToRender
  : [iconCow, iconCalf, iconGoat, iconHorse, iconHen, iconPig];

  return (
    <>
      <section className={s.sectionProductDetails}>
        <div className="container">
          <div className={s.buttonBackContainer}>
            <button onClick={() => navigate(-1)} className={s.buttonBack}>
              {t.buttonBack}
            </button>
            <div className={s.decorationBorder}></div>
            <h2 className={s.sectionProductDetailsTitle}>
              {product.name[language]}
            </h2>
          </div>
          <div className={s.productDetailsContainer}>
            <div className={s.imageContainerDesktop}>
              <img
                className={s.imgProductDetails}
                src={product.image}
                alt={product.name[language]}
              />

              <h3 className={s.categoryGoods}>{t.categoryGoods}</h3>
             <ul className={s.iconManufacturerList}>
  {finalIcons.map((icon, index) => (
    <li key={index} className={s.iconManufacturerList__item}>
      <img
        className={s.iconManufacturer}
        src={icon}
        alt="category icon"
      />
    </li>
  ))}
</ul>
              <ul className={s.categoryList}>
                {Array.isArray(product.category[language]) ? (
                  product.category[language].map((cat, index) => (
                    <li className={s.categoryList__item} key={index}>
                      <p className={s.categoryDescription}>{cat}</p>
                    </li>
                  ))
                ) : (
                  <li className={s.categoryList__item}>
                    <p className={s.categoryDescription}>
                      {product.category[language]}
                    </p>
                  </li>
                )}
              </ul>
            </div>
            <div className={s.productDescriptionContainer}>
              <h3 className={s.productDetailsName}>{product.name[language]}</h3>
              <p className={s.productDetailsManufacturer}>
                {Array.isArray(product.manufacturer?.[language])
                  ? product.manufacturer[language].join(' / ')
                  : product.manufacturer?.[language] || ''}
              </p>
              <p
                className={s.productDetailsDescription}
                style={{ padding: '8px', marginBottom: '4px' }}
              >
                {product.description[language]}
              </p>
              {Array.isArray(product.descriptionText[language])
                ? product.descriptionText[language].map((text, index) => (
                    <p
                      key={index}
                      className={s.productDetailsDescriptionSecond}
                      style={{ marginBottom: '8px' }}
                    >
                      {text}
                    </p>
                  ))
                : product.descriptionText[language] && (
                    <p
                      className={s.productDetailsDescriptionText}
                      style={{ marginBottom: '8px' }}
                    >
                      {product.descriptionText[language]}
                    </p>
                  )}

              {product.sections &&
                product.sections.map((section, index) => (
                  <div key={index} className={s.productDetailsBorder}>
                    {(section.title[language] ||
                      (language === 'ua' && section.title.ua)) && (
                      <h3
                        className={s.categoryGoodsDescription}
                        style={{
                          marginBottom: '0px',
                          padding: '12px 8px 8px 8px',
                        }}
                      >
                        {section.title[language] || section.title.ua}
                      </h3>
                    )}

                    {Array.isArray(section.items[language]) &&
                    section.items[language].length > 0 ? (
                      <ul className={s.categoryGoodsList}>
                        {section.items[language].map((item, i) => (
                          <li key={i} className={s.categoryGoodsList__item}>
                            <p className={s.productDetailsDescriptionThird}>
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : language === 'ua' &&
                      Array.isArray(section.items.ua) &&
                      section.items.ua.length > 0 ? (
                      <ul className={s.categoryGoodsList}>
                        {section.items.ua.map((item, i) => (
                          <li key={i} className={s.categoryGoodsList__item}>
                            <p className={s.productDetailsDescriptionThird}>
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}

              <ButtonCallBack
                style={{
                  marginTop: isMobile ? '8px' : '32px',
                  marginLeft: 'auto',
                  width: isMobile ? '91.47%' : '41.67%',
                }}
                language={language}
              />
            </div>
          </div>

          <div className={s.productDetailsContainerTablet}>
            <div className={s.imageContainerTab}>
              <img
                className={s.imgProductDetailsTablet}
                src={product.image}
                alt={product.name[language]}
              />

              <div className={s.productNameAndManufacturerContainer}>
                <h3 className={s.productDetailsName}>
                  {product.name[language]}
                </h3>
                <p className={s.productDetailsManufacturer}>
                  {Array.isArray(product.manufacturer?.[language])
                    ? product.manufacturer[language].join(' / ')
                    : product.manufacturer?.[language] || ''}
                </p>

                <h3 className={s.categoryGoods}>{t.categoryGoods}</h3>
                <ul className={s.iconManufacturerList}>
  {finalIcons.map((icon, index) => (
    <li key={index} className={s.iconManufacturerList__item}>
      <img
        className={s.iconManufacturer}
        src={icon}
        alt="category icon"
      />
    </li>
  ))}
</ul>
                
              </div>
            </div>

            <div className={s.productDescriptionContainer}>
              <p
                className={s.productDetailsDescription}
                style={{ padding: '8px', marginBottom: '4px' }}
              >
                {product.description[language]}
              </p>
              {Array.isArray(product.descriptionText[language])
                ? product.descriptionText[language].map((text, index) => (
                    <p
                      key={index}
                      className={s.productDetailsDescriptionSecond}
                      style={{ marginBottom: '8px' }}
                    >
                      {text}
                    </p>
                  ))
                : product.descriptionText[language] && (
                    <p
                      className={s.productDetailsDescriptionText}
                      style={{ marginBottom: '8px' }}
                    >
                      {product.descriptionText[language]}
                    </p>
                  )}

              {product.sections &&
                product.sections.map((section, index) => (
                  <div key={index} className={s.productDetailsBorder}>
                    {(section.title[language] ||
                      (language === 'ua' && section.title.ua)) && (
                      <h3
                        className={s.categoryGoodsDescription}
                        style={{
                          marginBottom: '0px',
                          padding: '12px 8px 8px 8px',
                        }}
                      >
                        {section.title[language] || section.title.ua}
                      </h3>
                    )}

                    {Array.isArray(section.items[language]) &&
                    section.items[language].length > 0 ? (
                      <ul className={s.categoryGoodsList}>
                        {section.items[language].map((item, i) => (
                          <li key={i} className={s.categoryGoodsList__item}>
                            <p className={s.productDetailsDescriptionThird}>
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : language === 'ua' &&
                      Array.isArray(section.items.ua) &&
                      section.items.ua.length > 0 ? (
                      <ul className={s.categoryGoodsList}>
                        {section.items.ua.map((item, i) => (
                          <li key={i} className={s.categoryGoodsList__item}>
                            <p className={s.productDetailsDescriptionThird}>
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}

              <ButtonCallBack
                style={{
                  marginTop: isMobile ? '8px' : '32px',
                  marginLeft: 'auto',
                  marginRight: isTablet ? 'auto' : 'auto',
                  width:
                    isMobile && isTablet
                      ? '91.47%'
                      : isTablet
                      ? '46%'
                      : '41.67%',
                }}
                language={language}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
