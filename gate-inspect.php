/**
 * exit with error custom error message
 */
Route::get('/exception', function(){
    Gate::define('custom-gate', function($user=null){
       return Response::deny("You don't have permission to access Custom Gate", 503);
    });
    Gate::authorize('custom-gate', null);
});
