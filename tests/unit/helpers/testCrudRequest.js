export default function (crudRequestClass) {
  expect(crudRequestClass.get() instanceof Promise).toBeTruthy()
}
