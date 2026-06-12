package com.forgemobile.app

import android.app.Application
import sdk.pendo.io.*

class ForgeMobileApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        Pendo.setup(this, "c21f7893-dcb3-4103-8f68-408d25f5e8e0", null, null)
    }
}
