import { google } from "googleapis";

export const getSheetsData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
        },
        scopes: ["https//www.googleapis.com/auth/spreadsheets.readonly"]
    })

    const sheets = google.sheets({ version: "v4", auth: await auth.getClient() })
    const range = "Sheet1!A:Z"


    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        })

        return response.data.values

    } catch (error) {
        console.error(" Error fetching sheets data:", error)
        return []
    }

    const extractData = (data) => {
        const heroSection = { title: data[1][3], summary: [2][4] }

        let heroStart, heroEnd
        let hero = []

        let i = 0
        while (true) {
            if (data[i][0] === "END") break; 

            if (data[i][0] === "Hero Start") {
                heroStart = i+3;
            }
            if (data[i][0] === "Hero End") {
                heroEnd = i-2;
            }

        }


    let start, end;
    start = heroStart
    end = heroEnd
    for (;start <= end; start++) {
        abt.push({
            title: data[start][0],
            summary: data[start][1],
        });
    }
    
     extractData = (data) => {
        const aboutUs = { title: data[1][3], summary: [2][4] }

        let abtStart, abtEnd
        let abt = []

        let i = 0
        while (true) {
            if (data[i][0] === "END") break; 

            if (data[i][0] === "About Start") {
                abtStart = i+3;
            }
            if (data[i][0] === "About End") {
                abtEnd = i-2;
            }

        }


    let start, end;
    start = abtStart
    end = abtEnd
    for (;start <= end; start++) {
        abt.push({
            title: data[start][0],
            summary: data[start][1],
        });
    }

    }

     extractData = (data) => {
        const products = { title: data[1][3] }

        let proStart, proEnd
        let pro = []

        let i = 0
        while (true) {
            if (data[i][0] === "END") break; 

            if (data[i][0] === "Product Start") {
                abtStart = i+5;
            }
            if (data[i][0] === "Product End") {
                abtEnd = i-1;
            }

        }


    let start, end;
    start = proStart
    end = proEnd
    for (;start <= end; start++) {
        abt.push({
            title: data[start][0],
        });
    }
    }
    
}
}