export class ResourceNotFoundError extends Error {
  constructor() {
    super('Resource not found');

    // Set the prototype explicitly to avoid https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, ResourceNotFoundError.prototype);
  }
}
