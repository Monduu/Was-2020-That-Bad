import vaccine from '../Assets/Images/vaccine.jpg';
import couple from '../Assets/Images/couple.jpg';
import nasa from '../Assets/Images/nasa.jpg';

import { SRLWrapper } from "simple-react-lightbox";


function ArticleImages() {
  return (
    <SRLWrapper>
      <a src={nasa}>
        <img src={nasa} alt="NASA" />
      </a>
      <a href={couple}>
        <img href={couple} alt="Blue sky" />
      </a>
    </SRLWrapper>
  );
}

export default ArticleImages;