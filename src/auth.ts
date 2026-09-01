import { AuthOptions, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import AzureADProvider from "next-auth/providers/azure-ad"

const authOptions: AuthOptions = {
    // Configure one or more authentication providers
  providers: [
        GoogleProvider({
        clientId: String(process.env.GOOGLE_CLIENT_ID),
        clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code",
            },
          }
    }),
    AzureADProvider({
        clientId: String(process.env.AZURE_AD_CLIENT_ID),
        clientSecret: String(process.env.AZURE_AD_CLIENT_SECRET)
    })
  ],
}

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }