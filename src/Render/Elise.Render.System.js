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

Elise.Render.System = function(render, id, y, staffs) {
    if (render === undefined || id === undefined)
        return Elise.error('You must set the render object and the system id');
    this.render = render;

    this.staffs = staffs || [];
    this.x = 0;
    this.yOrigin = y || y;
    this.y = y || 0;
    this.id = id;

    this.cursor = new Elise.Render.Cursor(render, this.x, this.y);
    this.document = this.render.getDocument().append('<g class="g' + this.id + '" />')
                                             .children('.g' + this.id);
};

Elise.Render.System.prototype = {
    insertStaffEnd: function(staff) { this.staffs.push(staff); },
    insertStaffStart: function(staff) { this.staffs.unshift(staff); },
    createStaff: function() {
        var staff = new Elise.Render.Staff(this.render, this, this.staffs.length, this.cursor);
        return staff;
    },
    getY: function() { return this.y; },
    setY: function(y) { this.y = y; },
    getDocument: function() { return this.document; },
    getCursor: function() { return this.cursor; },
    render: function() {
        for (var i = 0 ; i < this.staffs.length ; ++i)
            this.staffs[i].render();    
    }
};
