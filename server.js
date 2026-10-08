import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// ============================================================
// SPEEDTECH SOLUTIONS
// API SERVER
// ============================================================

// ============================================================
// FILE PATH SETUP
// ============================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDirectory = path.join(__dirname, "data");
const requestsFile = path.join(
  dataDirectory,
  "requests.json"
);

// ============================================================
// CREATE DATA DIRECTORY / FILE
// ============================================================

if (!fs.existsSync(dataDirectory)) {
  fs.mkdirSync(dataDirectory, {
    recursive: true,
  });
}

if (!fs.existsSync(requestsFile)) {
  fs.writeFileSync(
    requestsFile,
    JSON.stringify([], null, 2),
    "utf8"
  );
}

// ============================================================
// MIDDLEWARE
// ============================================================

app.use(cors());
app.use(express.json());

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function readRequests() {
  try {
    const fileContent = fs.readFileSync(
      requestsFile,
      "utf8"
    );

    return JSON.parse(fileContent);
  } catch (error) {
    console.error(
      "Could not read requests file:",
      error
    );

    return [];
  }
}

function saveRequests(requests) {
  fs.writeFileSync(
    requestsFile,
    JSON.stringify(requests, null, 2),
    "utf8"
  );
}

// ============================================================
// CREATE CUSTOMER REQUEST
// ============================================================

app.post("/api/requests", (req, res) => {
  try {
    const requestData = req.body;

    // --------------------------------------------------------
    // VALIDATION
    // --------------------------------------------------------

    if (!requestData) {
      return res.status(400).json({
        success: false,
        message: "No request data was received.",
      });
    }

    if (!requestData.name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Customer name is required.",
      });
    }

    if (!requestData.phone?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Customer phone number is required.",
      });
    }

    if (!requestData.service?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Service selection is required.",
      });
    }

    if (!requestData.location?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Service location is required.",
      });
    }

    // --------------------------------------------------------
    // CREATE REQUEST
    // --------------------------------------------------------

    const customerRequest = {
      id: `REQ-${Date.now()}`,

      name: requestData.name.trim(),

      phone: requestData.phone.trim(),

      service: requestData.service.trim(),

      package: requestData.package || null,

      packageType:
        requestData.packageType || null,

      speedMbps:
        requestData.speedMbps !== null &&
        requestData.speedMbps !== undefined &&
        requestData.speedMbps !== ""
          ? Number(requestData.speedMbps)
          : null,

      price:
        requestData.price !== null &&
        requestData.price !== undefined &&
        requestData.price !== ""
          ? Number(requestData.price)
          : null,

      customSpeed:
        requestData.customSpeed !== null &&
        requestData.customSpeed !== undefined &&
        requestData.customSpeed !== ""
          ? Number(requestData.customSpeed)
          : null,

      customBudget:
        requestData.customBudget !== null &&
        requestData.customBudget !== undefined &&
        requestData.customBudget !== ""
          ? Number(requestData.customBudget)
          : null,

      location: requestData.location.trim(),

      installationDate:
        requestData.installationDate || null,

      message:
        requestData.message?.trim() || "",

      status: "New",

      createdAt: new Date().toISOString(),

      updatedAt: new Date().toISOString(),
    };

    // --------------------------------------------------------
    // SAVE REQUEST
    // --------------------------------------------------------

    const requests = readRequests();

    requests.unshift(customerRequest);

    saveRequests(requests);

    // --------------------------------------------------------
    // TERMINAL LOG
    // --------------------------------------------------------

    console.log(
      "\n============================================"
    );

    console.log(
      "SPEEDTECH SOLUTIONS CUSTOMER REQUEST RECEIVED"
    );

    console.log(
      "============================================"
    );

    console.log(customerRequest);

    console.log(
      "============================================\n"
    );

    // --------------------------------------------------------
    // RESPONSE
    // --------------------------------------------------------

    return res.status(201).json({
      success: true,

      message:
        "Customer request received successfully.",

      request: customerRequest,
    });
  } catch (error) {
    console.error(
      "SPEEDTECH SOLUTIONS REQUEST API ERROR:",
      error
    );

    return res.status(500).json({
      success: false,

      message:
        "We could not process your request right now.",
    });
  }
});

// ============================================================
// GET ALL CUSTOMER REQUESTS
// ============================================================

app.get("/api/requests", (req, res) => {
  try {
    const requests = readRequests();

    return res.status(200).json({
      success: true,
      count: requests.length,
      requests,
    });
  } catch (error) {
    console.error(
      "GET REQUESTS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Could not retrieve customer requests.",
    });
  }
});

// ============================================================
// GET ONE CUSTOMER REQUEST
// ============================================================

app.get("/api/requests/:id", (req, res) => {
  try {
    const requests = readRequests();

    const request = requests.find(
      (item) => item.id === req.params.id
    );

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Customer request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      request,
    });
  } catch (error) {
    console.error(
      "GET SINGLE REQUEST ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Could not retrieve the customer request.",
    });
  }
});

// ============================================================
// UPDATE REQUEST STATUS
// ============================================================

app.patch("/api/requests/:id", (req, res) => {
  try {
    const requests = readRequests();

    const requestIndex = requests.findIndex(
      (item) => item.id === req.params.id
    );

    if (requestIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Customer request not found.",
      });
    }

    const allowedStatuses = [
      "New",
      "Under Review",
      "Contacted",
      "In Progress",
      "Completed",
      "Cancelled",
    ];

    const { status } = req.body;

    if (
      !status ||
      !allowedStatuses.includes(status)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid request status.",
      });
    }

    requests[requestIndex].status = status;

    requests[requestIndex].updatedAt =
      new Date().toISOString();

    saveRequests(requests);

    return res.status(200).json({
      success: true,

      message:
        "Request status updated successfully.",

      request: requests[requestIndex],
    });
  } catch (error) {
    console.error(
      "UPDATE REQUEST ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Could not update the request.",
    });
  }
});

// ============================================================
// DELETE CUSTOMER REQUEST
// ============================================================

app.delete("/api/requests/:id", (req, res) => {
  try {
    const requests = readRequests();

    const requestIndex = requests.findIndex(
      (item) => item.id === req.params.id
    );

    if (requestIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Customer request not found.",
      });
    }

    const deletedRequest =
      requests[requestIndex];

    requests.splice(requestIndex, 1);

    saveRequests(requests);

    return res.status(200).json({
      success: true,

      message:
        "Customer request deleted successfully.",

      request: deletedRequest,
    });
  } catch (error) {
    console.error(
      "DELETE REQUEST ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Could not delete the request.",
    });
  }
});

// ============================================================
// API HEALTH CHECK
// ============================================================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,

    message:
      "SpeedTech Solutions API is running.",

    time: new Date().toISOString(),
  });
});

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log(
    "\n============================================"
  );

  console.log(
    "SPEEDTECH SOLUTIONS"
  );

  console.log(
    "API SERVER RUNNING"
  );

  console.log(
    `http://localhost:${PORT}`
  );

  console.log(
    "============================================\n"
  );
});