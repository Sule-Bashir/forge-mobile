package com.forgemobile.app

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.forgemobile.app.auth.AuthManager
import com.forgemobile.app.databinding.ActivityLoginBinding
import sdk.pendo.io.*

class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.buttonLogin.setOnClickListener {
            val email = binding.editTextEmail.text.toString()
            val password = binding.editTextPassword.text.toString()

            AuthManager.login(email, password) { user ->
                if (user != null) {
                    val visitorId = user.uid
                    val accountId = ""
                    val visitorData = HashMap<String, Any>().apply {
                        put("email", user.email)
                        user.displayName?.let { put("displayName", it) }
                    }
                    val accountData: HashMap<String, Any>? = null
                    Pendo.startSession(visitorId, accountId, visitorData, accountData)

                    startActivity(Intent(this, MainActivity::class.java))
                    finish()
                } else {
                    Toast.makeText(this, "Login failed", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }
}
