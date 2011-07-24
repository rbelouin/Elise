//
//  Elise : Javascript Library rendering Music Scores
//  Copyright (C) 2011 Rodolphe Belouin <rodolphe.belouin@gmail.com>
//  Copyright (C) 2011 Vincent Giersch <vincent@giersch.fr>
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

Elise = typeof(Elise) == 'undefined' ? {} : Elise;

Elise.Render = function(wrapper, formatWidth, formatHeight, formatMarginStaffTop, formatMarginStaffBottom) {
    if (wrapper === undefined)
        return Elise.error('You must define a wrapper for the score');

    this.wrapper = wrapper;
    this.formatWidth = parseInt(formatWidth, 10) || 800;
    this.formatHeight = parseInt(formatHeight, 10) || 600;
    this.formatMarginStaffTop = parseInt(formatMarginStaffTop, 10) || 20;
    this.formatMarginStaffBottom = parseInt(formatMarginStaffBottom, 10) || 20;

    this.id = 'elise-render';
    this.groups = [];
    this.y = 0;

    this.wrapper.empty()
                .append('<svg id="' + this.id + '" width="' + this.formatWidth + 'px" height="' + this.formatHeight + 'px" />');
    this.document = this.wrapper.children('svg#elise-render');
};

Elise.Render.prototype = {
    getFormatWidth: function() { return this.formatWidth; },
    getFormatHeight: function() { return this.formatHeight; },
    getFormatMarginStaffTop: function() { return this.formatMarginStaffTop; },
    getFormatMarginStaffBottom: function() { return this.formatMarginStaffBottom; },
    getWrapper: function() { return this.wrapper; },
    getDocument: function() { return this.document; },
    getY: function() { return this.y; },
    setY: function(y) { this.y = y; },
    createGroup: function() {
          var group = new Elise.Render.Group(this, this.groups.length);
          this.groups.push(group);
          return group;
    }
};
