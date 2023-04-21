interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not valid email',
  userName: 'Must start with capital character!',
};

