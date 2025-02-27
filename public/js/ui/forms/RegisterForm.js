/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    this.removeError();
    User.register(data, (err, response) => {
      if (response.success) {
        this.element.reset();
        App.setState( 'user-logged' );
        App.getModal("register").close();
      } else {
        this.showError(response.error, "register")
      }
    })
  }
}