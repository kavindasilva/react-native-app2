package com.ks2;

/**
  in android: react-native-gesture-handler rngesturehandlermodule.default.direction
  https://github.com/software-mansion/react-native-gesture-handler/issues/676#issuecomment-510131221
*/
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import org.pgsqlite.SQLitePluginPackage;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ks2";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }

  // @Override
  // protected List<ReactPackage> getPackages() {
  //   return Arrays.<ReactPackage>asList(
  //     new SQLitePluginPackage(),   // register SQLite Plugin here 
  //     new MainReactPackage());
  // }
}
