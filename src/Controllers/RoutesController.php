<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:25
 */

namespace ManukMinasyan\LaravelPermissionManager;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use ManukMinasyan\LaravelPermissionManager\Traits\PermissionManagerTrait;

class RoutesController extends Controller
{
    use PermissionManagerTrait;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $routes = Route::getRoutes()->getRoutesByName();

        $routes = $this->getAssocRoutes($routes);

        return view('laravel-permission-manager::routes.index', compact('routes'));
    }
}