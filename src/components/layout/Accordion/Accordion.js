import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Accordion = ({title, content }) => {
    const [isActive, setIsActive] = useState(false);
    // const accordionData = {
    //     title: 'Section 1',
    //     content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    //       laborum cupiditate possimus labore, hic temporibus velit dicta earum
    //       suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    //       voluptatem.`
    //   };
    
    //   const { title, content } = accordionData;
    const { t } = useTranslation()

      return (
        <>
            <div className="accordion-item">
              <div className="accordion-title"
              onClick={() => setIsActive(!isActive)}>
                <div className="me-2">{t('about_page_accordion_title_2')}</div>
                <div>{isActive ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>}</div>
              </div>
              {isActive && <div className="accordion-content">{t('about_page_accordion_content_2')}</div>}
            </div>
          
          </>
      );
    };
    
    export default Accordion;