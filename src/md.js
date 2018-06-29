module.exports = function MD(json) {
  const { description, name, props } = json;
  const output = `
# ${name}

${description}


## API 描述
|名字| 描述|类型|是否需要|默认值|
| ------------- |:-------------:|:-----:| -----:|-----:|
${Object.keys(props)
    .map(key => {
      return `|${key}|${props[key].declaration}|${props[key].type}|${
        props[key].isRequired
      }|${props[key].defaultValue}|`;
    })
    .join("\n")}
    `;
  return output;
};
