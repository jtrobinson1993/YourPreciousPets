<?php require_once( "couch/cms.php" ); ?><cms:template title='Homepage'/><!DOCTYPE html><head><meta name="robots" content="noindex"><title>Home | Your Precious Pets</title><link href="https://fonts.googleapis.com/css?family=Indie+Flower|Varela+Round" rel="stylesheet"></head><body><a href="#maincontent">Skip to main content</a><header id="site-header"><h1><cms:editable name='site_heading' type='text'>Your Precious Pets</cms:editable></h1><button id="main-menu-toggle"><span class="menu-bar" aria-hidden></span><span class="menu-bar" aria-hidden></span><span class="menu-bar" aria-hidden></span><span class="menu-toggle-text">Open Main Menu</span></button><nav><ul><li><a href="/new_site">Home</a></li><li><a href="/new_site/grooming.php">Grooming</a></li><li><a href="/new_site/boarding.php">Boarding</a></li></ul></nav></header><main id="main-content"></main><footer id="site-footer"></footer></body><?php COUCH::invoke(); ?>