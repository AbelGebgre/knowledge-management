import { tap } from 'rxjs/operators';

export class UtilService {
  static get(url, http, store, notifier) {
    return http.get(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.set(result.data);
          } else {
            notifier.add({
              severity: 'error',
              summary: 'Error',
              detail: result.error
            });
          }
        }, error => {
          notifier.add({
            severity: 'error',
            summary: 'Error',
            detail: error.message
          });
        })
      );
  }

  static add(url, data, http, store, notifier) {
    return http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.add(result.data);
          } else {
            let errors = '';
            result.errors.forEach(ele => {errors += ele + '\n';});
            notifier.add({
              severity: 'error',
              summary: 'Error',
              detail: errors
            });
          }
        }, failure => {
          let errors = '';
          failure.error.errors.forEach(ele => {errors += ele + '\n';});
          notifier.add({
            severity: 'error',
            summary: 'Error',
            detail: errors
          });
        })
      );
  }

  static update(url, data, http, store, notifier): void {
    return http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.update(result.data.id, result.data);
          } else {
            let errors = '';
            result.errors.forEach(ele => {errors += ele + '\n';});
            notifier.add({
              severity: 'error',
              summary: 'Error',
              detail: errors
            });
          }
        }, failure => {
          let errors = '';
          failure.error.errors.forEach(ele => {errors += ele + '\n';});
          notifier.add({
            severity: 'error',
            summary: 'Error',
            detail: errors
          });
        })
      );
  }

  static delete(url, id, http, store, notifier) {
    return http.delete(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            store.remove(id);
          } else {
            notifier.add({
              severity: 'error',
              summary: 'Error',
              detail: result.error
            });
          }
        }, failure => {
          notifier.add({
            severity: 'error',
            summary: 'Error',
            detail: failure.error.error
          });
        })
      );
  }
}