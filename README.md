# My Little Pony Name Generator

[![Build Status](https://travis-ci.org/wavesoftware/mlp-name-generator.svg)](https://travis-ci.org/wavesoftware/mlp-name-generator) [![Coveralls](https://img.shields.io/coveralls/wavesoftware/mlp-name-generator.svg)](https://coveralls.io/r/wavesoftware/mlp-name-generator) [![Gemnasium](https://img.shields.io/gemnasium/wavesoftware/mlp-name-generator.svg)](https://gemnasium.com/wavesoftware/mlp-name-generator) [![npm](https://img.shields.io/npm/v/mlp-name-generator.svg)](https://www.npmjs.com/package/mlp-name-generator) [![npm](https://img.shields.io/npm/l/mlp-name-generator.svg)]()

Generate a fantastic My Little Pony name, perfect for FUN code name!

    $ mlp-name-generator
    PrinceSunshine
    $ mlp-name-generator
    DawnAngel

Use with STDIN!

    $ echo 'I heart you!' | mlp-name-generator
    SunnyPumpkin
    $ mlp-name-generator < /var/log/syslog
    FrostyCloud

Generate as many as you want!

    $ mlp-name-generator --num 3
    StrawberryBeach
    BubbleGlitter
    FrillyAmethyst

Help with: `mlp-name-generator --help`

## Installation

    $ sudo npm install -g mlp-name-generator

## Requirements

 * Node >= 0.10 <= 0.12