convertFahrToCelsius();

function convertFahrToCelsius() {
    // convertFahrToCelsius could either be an if-else structure or a switch-case structure

    var choice;
    var temperature;
    var result;

    choice = getChoice();

    // if-else approach
    if (choice == "C" || choice == "c") {
        temperature = getTemperature("Fahrenheit");
        result = calculateCelsius(temperature);
        displayResult(temperature, "Fahrenheit", result, "Celsius");
    } else if (choice == "F" || choice == "f") {
        temperature = getTemperature("Celsius");
        result = calculateFahrenheit(temperature);
        displayResult(temperature, "Celsius", result, "Fahrenheit");
    } else {
        output(
            "You must enter C to convert to Celsius or F to convert to Fahrenheit!"
        );
    }

    // switch-case approach
    switch (choice) {
        case "C":
        case "c":
            temperature = getTemperature("Fahrenheit");
            result = calculateCelsius(temperature);
            displayResult(temperature, "Fahrenheit", result, "Celsius");
            break;
        case "F":
        case "f":
            temperature = getTemperature("Celsius");
            result = calculateFahrenheit(temperature);
            displayResult(temperature, "Celsius", result, "Fahrenheit");
            break;
        default:
            output(
                "You must enter C to convert to Celsius or F to convert to Fahrenheit!"
            );
    }
}

function getChoice() {
    var choice;

    output("Enter C to convert to Celsius or F to convert to Fahrenheit:");
    choice = input();

    return choice;
}

function getTemperature(label) {
    var temperature;
    var temperature = toFixed(4);
    output("Enter " + label + " temperature:");
    temperature = input();

    return temperature;
}

function calculateCelsius(fahrenheit) {
    var celsius;
    var celsius = toFixed(4);

    celsius = ((fahrenheit - 32) * 5) / 9;

    return celsius(.toFixed(4));
}

function calculateFahrenheit(celsius) {
    var fahrenheit;

    fahrenheit = (celsius * 9) / 5 + 32;

    return fahrenheit(.toFixed(4));
}

function displayResult(temperature, fromLabel, result, toLabel) {
    output(
        temperature.toString() + "° " + fromLabel + " is " + result + "° " + toLabel
    );
}

function input(text) {
    if (typeof window === "object") {
        return prompt(text);
    } else if (typeof console === "object") {
        const rls = require("readline-sync");
        var value = rls.question(text);
        return value;
    } else {
        output(text);
        var isr = new java.io.InputStreamReader(java.lang.System.in);
        var br = new java.io.BufferedReader(isr);
        var line = br.readLine();
        return line.trim().tofixed(4);
    }
}

function output(text) {
    if (typeof document === "object") {
        document.write(text);
    } else if (typeof console === "object") {
        console.log(text);

    } else {
        print(text).toFixed(4);
    }
}