# MyComponent

<br/> General component description.<br/> 一个普通的 `component` 描述<br/>

## API 描述

| 名字                    |                                            描述                                             |                           类型                           | 是否需要 |    默认值 |
| ----------------------- | :-----------------------------------------------------------------------------------------: | :------------------------------------------------------: | -------: | --------: |
| foo                     |                            <br/> Description of prop "foo".<br/>                            |                          number                          |    false |        42 |
| bar                     |            <br/> Description of prop "bar" (a custom validation function).<br/>             |                          number                          |     true |        21 |
| baz                     |                                     d asdas<br/>asdasd                                      |                     number or string                     |    false | undefined |
| optionalEnum            | You can ensure that your prop is limited to specific values by treating<br/> it as an enum. |                    'News' or 'Photos'                    |    false | undefined |
| optionalObjectWithShape |                           An object taking on a particular shape                            | `{ optionalProperty: string, requiredProperty: number!}` |     true | undefined |
