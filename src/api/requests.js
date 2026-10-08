// ============================================================
// SPEEDTECH SOLUTIONS
// Customer Request API
// ============================================================

export default async function handler(req, res) {
  // ----------------------------------------------------------
  // Only allow POST requests
  // ----------------------------------------------------------
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    // --------------------------------------------------------
    // Get customer request data from the frontend
    // --------------------------------------------------------
    const requestData = req.body;

    // --------------------------------------------------------
    // Basic validation
    // --------------------------------------------------------
    if (!requestData) {
      return res.status(400).json({
        success: false,
        message: "No request data was received.",
      });
    }

    if (!requestData.name) {
      return res.status(400).json({
        success: false,
        message: "Customer name is required.",
      });
    }

    if (!requestData.phone) {
      return res.status(400).json({
        success: false,
        message: "Customer phone number is required.",
      });
    }

    if (!requestData.service) {
      return res.status(400).json({
        success: false,
        message: "Service selection is required.",
      });
    }

    if (!requestData.location) {
      return res.status(400).json({
        success: false,
        message: "Service location is required.",
      });
    }

    // --------------------------------------------------------
    // Create a request record
    // --------------------------------------------------------
    const customerRequest = {
      id: `REQ-${Date.now()}`,

      name: requestData.name,
      phone: requestData.phone,

      service: requestData.service,

      package: requestData.package || null,
      packageType: requestData.packageType || null,

      speedMbps:
        requestData.speedMbps !== null &&
        requestData.speedMbps !== undefined
          ? Number(requestData.speedMbps)
          : null,

      price:
        requestData.price !== null &&
        requestData.price !== undefined
          ? Number(requestData.price)
          : null,

      customSpeed:
        requestData.customSpeed !== null &&
        requestData.customSpeed !== undefined
          ? Number(requestData.customSpeed)
          : null,

      customBudget:
        requestData.customBudget !== null &&
        requestData.customBudget !== undefined
          ? Number(requestData.customBudget)
          : null,

      location: requestData.location,

      installationDate:
        requestData.installationDate || null,

      message: requestData.message || "",

      status: "New",

      createdAt:
        requestData.createdAt ||
        new Date().toISOString(),
    };

    // --------------------------------------------------------
    // Temporary server logging
    //
    // This allows us to confirm that the request reached
    // the API successfully.
    // --------------------------------------------------------
    console.log(
      "============================================"
    );

    console.log(
      "SPEEDTECH SOLUTIONS CUSTOMER REQUEST RECEIVED"
    );

    console.log(
      "============================================"
    );

    console.log(customerRequest);

    console.log(
      "============================================"
    );

    // --------------------------------------------------------
    // Return successful response
    // --------------------------------------------------------
    return res.status(200).json({
      success: true,
      message: "Customer request received successfully.",
      request: customerRequest,
    });
  } catch (error) {
    // --------------------------------------------------------
    // Handle unexpected server errors
    // --------------------------------------------------------
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
}