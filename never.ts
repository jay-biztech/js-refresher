function generateError(message: string, code: number): never {
  throw { message, code };

  //while (true)
}

generateError('An error occured!', 500);
