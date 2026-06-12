package com.forgemobile.app.auth

data class User(
    val uid: String,
    val email: String,
    val displayName: String?
)

object AuthManager {
    private var currentUser: User? = null

    fun login(email: String, password: String, onResult: (User?) -> Unit) {
        // Simulated authentication
        val user = User(
            uid = email.hashCode().toString(),
            email = email,
            displayName = email.substringBefore("@")
        )
        currentUser = user
        onResult(user)
    }

    fun getCurrentUser(): User? = currentUser

    fun logout() {
        currentUser = null
    }
}
