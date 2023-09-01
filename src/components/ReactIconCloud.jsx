import allIcons from 'simple-icons';
import { v4 } from 'uuid';
import { IconCloud } from 'react-icon-cloud';
import '../Styles/ReactIconCloud.css';

function ReactIconCloud() {
  const tagCanvasOptions = {
    imageScale: 3,
    initial: [0.2, -0.2],
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
  };

  const iconSlugs = [
    'javascript',
    'react',
    'redux',
    'jest',
    'git',
    'github',
    'visualstudiocode',
    'linux',
    'eslint',
    'docker',
    'npm',
    'css3',
    'mysql',
    'express',
    'mocha',
    'chai',
    'typescript',
    'nodedotjs',
    'nextdotjs',
    'tailwindcss',
    'sequelize',
  ];

  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }))

  return (
    <div className='icon-cloud-container'>
      <IconCloud
      key={v4()}
      id={"icon"}
      minContrastRatio={0}
      iconSize={40}
      backgroundHexColor={"#fff"}
      fallbackHexColor={"#000"}
      tags={iconTags}
      tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
}

export default ReactIconCloud;