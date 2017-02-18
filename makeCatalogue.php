<?php
/*
Plugin Name: Make Article Catalogue
Plugin URI: https://github.com/summer1914/Make-Article-Catalogue
Description: 为文章自动生成内页目录。
Version: 1.0
Author: 罗佳
Author URI: https://www.luojia.ren/
*/

/**
 * { 加载插件js文件以及css文件 }
 */
function wp_adding_scripts() {
    if (is_single()) {
        wp_register_script( 'catalogue_main_js', plugins_url('main.js', __FILE__),array(), '1.0', true );
    	wp_enqueue_script( 'catalogue_main_js' );
    	wp_register_style('catalogue_style', plugins_url('style.css', __FILE__), array(),'1.0', 'all');
        wp_enqueue_style('catalogue_style');
    }
}

add_action( 'wp_enqueue_scripts', 'wp_adding_scripts' );


