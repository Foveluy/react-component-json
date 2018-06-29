# MyComponent

- General component description.

|foo|_ Description of prop "foo".|number|false|42|
|bar|_ Description of prop "bar" (a custom validation function).|number|true|21|
|baz|d asdasasdasd|number | string|false|undefined|
|optionalEnum| You can ensure that your prop is limited to specific values by treating it as an enum.|'News' | 'Photos'|false|undefined|
|optionalObjectWithShape| An object taking on a particular shape|{
optionalProperty: string,
requiredProperty: number!
}|true|undefined|
