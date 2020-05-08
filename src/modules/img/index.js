import path from '../path/index.js';

function rename(name, prefix){
  const dirname = path.dirname(name);
  const basename = path.basename(name);
  return path.join(dirname, `${prefix}-` + basename);
}

const obj = {
  sm:(name)=>rename(name, 'sm'),
  md:(name)=>rename(name, 'md'),
  lg:(name)=>rename(name, 'lg')
};

export default obj;
