import React from 'react';

// SVG
import { ReactComponent as Html } from '../../assets/images/svg/asset 20.svg';
import { ReactComponent as Css } from '../../assets/images/svg/asset 21.svg';
import { ReactComponent as Sass } from '../../assets/images/svg/asset 22.svg';
import { ReactComponent as Js } from '../../assets/images/svg/asset 23.svg';
import { ReactComponent as Bootstrap4 } from '../../assets/images/svg/asset 25.svg';
import { ReactComponent as Git } from '../../assets/images/svg/asset 26.svg';
import { ReactComponent as Wordpress } from '../../assets/images/svg/asset 27.svg';

export default function LogoTec({tec, estilos}) {
    return TypeLogo.run(tec, estilos);
}

const TypeLogo = (() => {
  const opcion = {
    html: stiles => {
      return <Html className={stiles} />;
    },
    css: stiles => {
      return <Css className={stiles} />;
    },
    sass: stiles => {
      return <Sass className={stiles} />;
    },
    js: stiles => {
      return <Js className={stiles} />;
    },
    bst: stiles => {
      return <Bootstrap4 className={stiles} />;
    },
    git: stiles => {
      return <Git className={stiles} />;
    },
    wp: stiles => {
        return <Wordpress className={stiles} />;
    }
  }
  
  return {
    run: (comando, argumentos) => {
      if (!opcion[comando]) {
        return <p>No existe el logo</p>;
      }

      return opcion[comando](argumentos);
    }
  }
})();
