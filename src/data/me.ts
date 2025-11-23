export const name = "Zoe Lin";
export const linkedin_username = "bigdata-zoelin";
export const github_username = "detectviz";

/*=============================================================================\
 | The email, phone number, and address fields below are Base64 encoded to     |
 | obfuscate them in the source code.  To update them, encode the data in      |
 | Base64 and paste the output as a string argument to the corresponding       |
 | `atob()` function below.                                                    |
 |                                                                             |
 | Mac command to Base64 encode (and copy the encoded data to the clipboard):  |
 |                                                                             |
 |     echo -n 'kontakt@bitzer-fabian.de' | base64 | pbcopy                    |
 |                                                                             |
 | Linux command to Base64 encode:                                             |
 |                                                                             |
 |     echo -n 'kontakt@bitzer-fabian.de' | base64                             |
 |                                                                             |
 | JavaScript command to Base64 encode:                                        |
 |                                                                             |
 |     btoa('kontakt@bitzer-fabian.de')                                        |
 |                                                                             |
 \============================================================================*/
// zoe.lin@detectviz.com encoded in base64
const email_base64_encoded = "em9lLmxpbkBkZXRlY3R2aXouY29t";

// The data is decoded and exported below. Do not edit below this line.
export const email = atob(email_base64_encoded);

// Helper code for creating URLs from the above data.
export const linkedin_url   = `https://www.linkedin.com/in/${linkedin_username}`;
export const github_url = `https://github.com/${github_username}`;
